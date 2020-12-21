/** @module Popup
 *  @class Popup
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.18, 02:34
 *
 *  TODO 2020.12.18, 01:50 -- Popup: Reset both `storedContentSize` if content changed (use registrable handler)?
 *  TODO 2020.12.18, 02:15 -- Popup: Use static `PopupStack` component and close same-level (from stack end to first `Modal` or stack begin) popups
 *  TODO 2020.12.19, 03:35 -- Popup: Use nearest scrollable container ancestor as popup base? Or clip to it bounds? Or hide popup if countrol is (partially) out of this bounds?
 *
 *  External methods:
 *  - close
 *  - open
 *  - updateGeometry
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure'
// import withOnClickOutside from 'react-onclickoutside' // To use?
import { strings } from 'utils'
import { debounce } from 'throttle-debounce'
import FormItemHOC from 'forms/FormItemHOC'
import { PortalWithState } from 'react-portal'

import config from 'config'

import './Popup.pcss'

const cnPopup = cn('Popup')
const cnPopupControl = cn('PopupControl')

const popupsContainerId = 'Popups' // Id of dom node which contains all popups (`<div id="Popups"></div>`). TODO: Store in config?

const doDebug = false // DEBUG!

// Debounce delay
const debouncedUpdateGeometryTimeout = /*DEBUG*/ doDebug ? 500 :
  10

// Update by timer (0 - disabled), must be above than debounce delay (`debouncedUpdateGeometryTimeout`, above)
const updateGeometryTimerDelay = /*DEBUG*/ doDebug ? 0 :
  20 // 0

const domNodeGeometryKeys = [
  /* // controlBouningBox sample:
   * bottom: 642.8125
   * height: 32
   * left: 223.921875
   * right: 551.515625
   * top: 610.8125
   * width: 327.59375
   * x: 223.921875
   * y: 610.8125
   */
  'left',
  'top',
  'width',
  'height',
  /* // Old values (for `node.style` keys)
   * 'offsetLeft',
   * 'offsetTop',
   * 'offsetWidth',
   * 'offsetHeight',
   */
]
const verticalGeometryKeys = [
  'contentHeight',
  'contentTop',
  'controlHeight',
  'controlTop',
  'scrollY',
  'viewHeight',
]
const horizontalGeometryKeys = [
  'contentWidth',
  'contentLeft',
  'controlWidth',
  'controlLeft',
  'scrollX',
  'viewWidth',
]

const globalGeometryKeys = {
  viewWidth: { obj: window, key: 'innerWidth' },
  viewHeight: { obj: window, key: 'innerHeight' },
  scrollX: { obj: window, key: 'pageXOffset' },
  scrollY: { obj: window, key: 'pageYOffset' },
}

const axisKeys = { // Used in `updateOneAxisContentPos`
  // Regexp to convert vertical axis keys to horizontal:
  // '<,'>S/top/left/g | '<,'>S/bottom/right/g | '<,'>S/height/width/g | '<,'>S/vertical/horizontal/g
  vertical: {
    viewSize: 'viewHeight',
    controlPos: 'controlTop',
    controlSize: 'controlHeight',
    scroll: 'scrollY',
    contentPos: 'contentTop',
    contentSize: 'contentHeight',
    contentStylePos: 'top',
    contentStyleSize: 'height',
    contentStyleMaxSize: 'maxHeight',
    // contentStyleMaxSize: 'max-height',
    storedContentSize: 'storedContentHeight', // Stored in dom node
  },
  horizontal: {
    viewSize: 'viewWidth',
    controlPos: 'controlLeft',
    controlSize: 'controlWidth',
    scroll: 'scrollY',
    contentPos: 'contentLeft',
    contentSize: 'contentWidth',
    contentStylePos: 'left',
    contentStyleSize: 'width',
    contentStyleMaxSize: 'maxWidth',
    // contentStyleMaxSize: 'max-width',
    storedContentSize: 'storedContentWidth', // Stored in dom node
  },
}

// const globalClickEventName = 'mousedown'
// const globalKeyPressEventName = 'keydown'
const globalScrollEventName = 'scroll'
const globalResizeEventName = 'resize'

/* // DEBUG: Demo for prevent closing underlaying popups. (Can be used for modal windows. See crrsp styles & html layout.)
 * const debugHide = document.getElementById('DebugHide')
 * setTimeout(() => {
 *   if (debugHide) {
 *     debugHide.style.display = 'block'
 *   }
 * }, 3000)
 * const debugHideListener = (ev) => {
 *   // ev.stopImmediatePropagation()
 *   ev.stopPropagation()
 * }
 * debugHide && debugHide.addEventListener('click', debugHideListener)
 */

class Popup extends React.PureComponent /** @lends @Popup.prototype */ {

  static propTypes = {
    // onEscPressed: PropTypes.func,
    // onKeyPress: PropTypes.func,
    // registerCallback: PropTypes.func, // registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    className: PropTypes.string,
    closeOnClickOutside: PropTypes.bool,
    closeOnEscPressed: PropTypes.bool,
    id: PropTypes.string,
    onControlClick: PropTypes.func,
    open: PropTypes.bool,
    popupContent: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    popupControl: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    setPopupNodeRef: PropTypes.func,
  }

  static defaultProps = {
    // onEscPressed: null,
    // onKeyPress: null,
    // popupContent: null,
    // popupControl: null,
    // registerCallback: null,
    className: null,
    closeOnClickOutside: true,
    closeOnEscPressed: true,
    id: null,
    onControlClick: null,
    open: false,
    setPopupNodeRef: null,
  }

  delayedClickTimerHandler = null
  globalHandlersRegistered = false
  controlDomNode = null
  contentDomNode = null
  geometry = {}

  // Lifecycle...

  constructor(props) {
    super(props)
    const { open } = props
    this.updateGeometry = debounce(debouncedUpdateGeometryTimeout, this.updateGeometryInstant)
    this.state = {}
    if (open) {
      this.handlePortalOpen()
    }
    // // NOTE: Example of callback register
    // if (typeof props.registerCallback === 'function') { // External hide canceler (FormSelect: on Menu click etc)
    //   props.registerCallback(this.someMethod)
    // }
  }

  componentWillUnmount() {
    this.unregisterGlobalHandlers()
  }

  // Helpers...

  getDomNodeGeometry(domNode, id) {
    id = id || 'default'
    const rect = domNode && domNode.getBoundingClientRect()
    /* // controlBouningBox sample:
     * bottom: 642.8125
     * height: 32
     * left: 223.921875
     * right: 551.515625
     * top: 610.8125
     * width: 327.59375
     * x: 223.921875
     * y: 610.8125
     */
    const geometry = rect && domNodeGeometryKeys.reduce((geometry, key) => {
      // const val = domNode && domNode[key]
      const val = rect && rect[key]
      if (val != null) {
        const resultKey = id + strings.ucFirst(key)
        geometry[resultKey] = val
      }
      return geometry
    }, {})
    return geometry || {}
  }

  getGlobalGeometry() {
    const geometry = Object.entries(globalGeometryKeys).reduce((geometry, [id, descr]) => {
      const obj = descr.obj
      const key = descr.key || id
      const val = obj[key]
      return { ...geometry, [id]: val }
    }, {})
    return geometry
  }

  getUpdatedGeometryKeys(geometry) {
    const origGeometry = this.geometry
    const updatedKeys = []
    Object.entries(geometry).forEach(([key, val]) => {
      if (val !== origGeometry[key]) {
        updatedKeys.push(key)
      }
    })
    return updatedKeys
  }

  updateContentWidth(geometry, updatedGeometryKeys) { // eslint-disable-line no-unused-vars
    // if (updatedGeometryKeys.includes('controlWidth') || updatedGeometryKeys.includes('contentWidth')) {
    const width = geometry.controlWidth
    const domNode = this.contentDomNode
    const setWidth = width + 'px'
    /* // DEBUG
     * console.log('Popup:updateContentWidth', {
     *   width,
     *   'geometry.contentWidth': geometry.contentWidth,
     *   // geometry,
     *   updatedGeometryKeys,
     * })
     * debugger
     */
    if (domNode.style.width !== setWidth) {
      geometry.contentWidth = width
      domNode.storedContentWidth = null // Reset stored width
      domNode.style.width = setWidth
    }
    // }
  }

  /** updateOneAxisContentPos -- Calculate content position/size for one axis (horizontal, vertical)
   * @param {String('horizontal'|'vertical')} axis
   * @param {Object} geometry
   * @param {String[]} updatedGeometryKeys
   */
  updateOneAxisContentPos(axis, geometry, updatedGeometryKeys) { // eslint-disable-line no-unused-vars
    const domNode = this.contentDomNode
    if (!domNode) { // Error?
      return
    }
    const { popupContentGap } = config.css
    // const doubleContentPopupGap = popupContentGap * 2 // UNUSED
    const keys = axisKeys[axis]
    const isVertical = (axis === 'vertical')

    // Get coordinates...
    const viewSize = geometry[keys.viewSize] // viewHeight
    const controlPos = geometry[keys.controlPos] // controlTop
    const controlSize = geometry[keys.controlSize] // controlHeight
    // const scroll = geometry[keys.scroll] // scrollY
    const contentPos = geometry[keys.contentPos] // contentTop
    const contentSize = geometry[keys.contentSize] // contentClientHeight

    const storedContentSize = domNode[keys.storedContentSize]
    const contentMaxSize = storedContentSize || contentSize
    if (!storedContentSize || contentSize > storedContentSize) { // Save (maximum) height
      domNode[keys.storedContentSize] = contentSize
    }

    const viewStart = popupContentGap
    const viewEnd = viewSize - popupContentGap

    // Calculate control coordinates...
    const controlScreenPos = controlPos // - scroll
    const controlScreenEnd = controlScreenPos + controlSize
    const posNormal = isVertical ? controlScreenEnd + popupContentGap : controlScreenPos
    const posReverted = isVertical ? controlScreenPos - popupContentGap : controlScreenEnd
    const spaceAfter = viewEnd - posNormal
    const spaceBefore = posReverted - viewStart

    // Is it better to show content above control?
    // TODO: Alternative calculations for horizontal axis
    // const spaceBefore = isVertical ? controlScreenPos : controlScreenEnd
    // // const spaceEnd = isVertical ? controlScreenAfter : controlScreenPos
    // const spaceAfter = isVertical ? controlScreenAfter : controlScreenPos
    const isntFitBefore = (contentMaxSize > spaceBefore)
    const isntFitAfter = (contentMaxSize > spaceAfter)
    const isMoreSpaceBefore = spaceBefore > spaceAfter
    const placeBefore = isMoreSpaceBefore && isntFitAfter
    const isntFit = placeBefore ? isntFitBefore : isntFitAfter
    const fitSize = (placeBefore ? spaceBefore : spaceAfter) // - doubleContentPopupGap

    // Calculate `contentPos`...
    let contentPosValue
    if (placeBefore) { // Down-up position: from control top -> up
      const fitContentSize = isntFit ? fitSize : contentMaxSize
      contentPosValue = (posReverted - fitContentSize)
      // contentPosValue = (controlScreenPos - fitContentSize - popupContentGap)
    }
    else { // Normal position: from control bottom -> down
      contentPosValue = posNormal
      // contentPosValue = (controlScreenEnd + popupContentGap)
    }
    const cssContentPos = contentPosValue + 'px'
    const isContentPosChanged = (contentPosValue !== contentPos) // Is position changed?

    // Calculate `contentStyleMaxSize`...
    const cssContentStyleMaxSize = isntFit ? fitSize + 'px' : '' // New value: pixels or auto (empty)
    const origContentStyleMaxSize = domNode.style[keys.contentStyleMaxSize] // Old value
    const isContentStyleMaxSizeChanged = (cssContentStyleMaxSize !== origContentStyleMaxSize) // Is maxsize changed?
    if (isContentPosChanged || isContentStyleMaxSizeChanged) { // Pos or size changed
      domNode.style[keys.contentStylePos] = cssContentPos // Update dom node css style
      geometry[keys.contentPos] = contentPosValue // Update geometry object
      domNode.style[keys.contentStyleMaxSize] = cssContentStyleMaxSize // Update dom node css style
    }

    /* // DEBUG (use doDebug?)...
     * console.log('Popup:updateOneAxisContentPos', {
     *   // Parameters...
     *   axis,
     *   placeBefore,
     *   isntFit,
     *   // Coordinates...
     *   fitSize,
     *   contentPos,
     *   cssContentPos,
     *   cssContentStyleMaxSize,
     *   // controlScreenPos,
     *   // controlScreenEnd,
     *   // controlScreenAfter,
     *   // General...
     *   updatedGeometryKeys,
     *   geometry: geometry,
     *   'this.geometry': this.geometry,
     *   'changed geometry': Object.entries(geometry).reduce((result, [key, val]) => {
     *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
     *   }, {}),
     *   'changed this.geometry': Object.entries(this.geometry).reduce((result, [key, val]) => {
     *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
     *   }, {}),
     * })
     */
  }

  updateGeometryInstant = () => { // UNUSED? TODO? Update geometry
    if (!this.isOpen) { // Do nothing if popup is closed
      return
    }
    const { fullWidth } = this.props
    // TODO: Call `updateGeometryInstant` on content update? How? Use timer?
    const controlGeometry = this.getDomNodeGeometry(this.controlDomNode, 'control')
    const contentGeometry = this.getDomNodeGeometry(this.contentDomNode, 'content')
    const globalGeometry = this.getGlobalGeometry()
    const geometry = { ...globalGeometry, ...controlGeometry, ...contentGeometry }
    /* Sample geometry keys:
     * contentHeight
     * contentLeft
     * contentTop
     * contentWidth
     * controlHeight
     * controlLeft
     * controlTop
     * controlWidth
     * scrollX
     * scrollY
     * viewHeight
     * viewWidth
     */
    const updatedGeometryKeys = this.getUpdatedGeometryKeys(geometry)
    const changedHorizontalKeys = horizontalGeometryKeys.some(key => updatedGeometryKeys.includes(key))
    const changedVerticalKeys = verticalGeometryKeys.some(key => updatedGeometryKeys.includes(key))
    /* // DEBUG (use doDebug?)...
     * console.log('Popup:updateGeometryInstant', {
     *   updatedGeometryKeys,
     *   changedHorizontalKeys,
     *   changedVerticalKeys,
     *   // geometry,
     *   // 'this.geometry': this.geometry,
     *   'changed geometry': Object.entries(geometry).reduce((result, [key, val]) => {
     *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
     *   }, {}),
     *   'changed this.geometry': Object.entries(this.geometry).reduce((result, [key, val]) => {
     *     return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
     *   }, {}),
     * })
     */
    if (!updatedGeometryKeys.length) { // Do nothing if no changes found
      return
    }
    if (changedVerticalKeys) {
      this.updateOneAxisContentPos('vertical', geometry, updatedGeometryKeys) // Update vertical position & size...
    }
    if (changedHorizontalKeys) {
      if (fullWidth) { // TODO?
        this.updateContentWidth(geometry, updatedGeometryKeys)
      }
      this.updateOneAxisContentPos('horizontal', geometry, updatedGeometryKeys) // Update horizontal position & size...
    }
    this.geometry = geometry
  }

  registerGlobalHandlers() {
    if (!this.globalHandlersRegistered) {
      this.globalHandlersRegistered = true
      document.addEventListener(globalScrollEventName, this.updateGeometry)
      window.addEventListener(globalResizeEventName, this.updateGeometry)
      if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
        this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
      }
    }
  }
  unregisterGlobalHandlers() {
    if (this.globalHandlersRegistered) {
      this.globalHandlersRegistered = false
      document.removeEventListener(globalScrollEventName, this.updateGeometry)
      window.removeEventListener(globalResizeEventName, this.updateGeometry)
      if (this.updateGeometryTimer) {
        clearInterval(this.updateGeometryTimer)
        this.updateGeometryTimer = null
      }
    }
  }

  // Render helpers...

  getClassName(params) {
    const {
      isOpen,
      cnCtx,
      className,
    } = params
    const {
      id,
      fullWidth,
    } = this.props
    return cnCtx && cnCtx({
      id,
      open: isOpen,
      fullWidth,
    }, [/* this.props. */className])
  }

  // External methods...

  close = () => { // External method for using in `PopupStack`
    const { isOpen, closePortal } = this
    if (isOpen && typeof closePortal === 'function') {
      closePortal()
    }
  }

  open = () => { // External method for using in `PopupStack`
    const { isOpen, openPortal } = this
    if (!isOpen && typeof openPortal === 'function') {
      openPortal()
    }
  }

  // Handlers...

  setControlRef = (domNode) => {
    this.controlDomNode = domNode
  }

  setContentRef = (domNode) => {
    this.contentDomNode = domNode
  }

  clearContentGeometry() { // UNUSED? Must be used on content update (using registrable callback; see example in constructor).
    Object.keys(this.geometry).forEach(key => {
      if (key.startsWith('content')) {
        this.geometry[key] = null
      }
    })
  }

  handlePortalOpen = () => {
    // TODO: Register/unregister popup in `PopupStack`
    this.updateGeometryInstant()
    this.registerGlobalHandlers()
    this.isOpen = true
  }

  handlePortalClose = () => {
    // TODO: Register/unregister popup in `PopupStack`
    this.wasOpen = true
    this.unregisterGlobalHandlers()
    this.isOpen = false
    this.clearContentGeometry() // Due to content is destroyed when hidden
  }

  onControlClick = (/* event */) => {
    const { isOpen, openPortal, closePortal } = this
    const method = isOpen ? closePortal : openPortal
    if (typeof method === 'function') {
      // method(event)
      // setTimeout(method, 0)
      const fakeEvent = {
        nativeEvent: {
          stopImmediatePropagation: () => {},
        },
      }
      setTimeout(() => method(fakeEvent), 0)
    }
    // TODO: Notify `PopupStack` when popup opens for closing all other popups from same level (before first modal in popups stack). (Now user can open several popups at the same time.
    const { onControlClick } = this.props
    if (typeof onControlClick === 'function') {
      onControlClick({ open: !isOpen })
    }
  }

  // Render...

  renderPopupControl(portalParams) {
    const {
      isOpen,
      openPortal,
      closePortal,
      // portal,
    } = portalParams
    const {
      id,
      popupControl,
      className,
    } = this.props

    this.openPortal = openPortal
    this.closePortal = closePortal

    const controlProps = popupControl && popupControl.props

    const content = {
      ...popupControl,
      props: {
        ...controlProps,
        onClick: this.onControlClick,
        // onClick: isOpen ? closePortal : openPortal,
        // onClick: [> controlProps.onControlClick || <] this.onControlClick,
        checked: isOpen,
        setDomRef: this.setControlRef,
      },
    }

    const renderProps = {
      id,
      className: this.getClassName({ cnCtx: cnPopupControl, className, ...portalParams }),
      ref: this.setControlRef,
    }
    return (
      <div {...renderProps}>
        {content}
      </div>
    )
  }

  renderPopupContent(portalParams) {
    const {
      // isOpen,
      // openPortal,
      // closePortal,
      portal,
    } = portalParams
    const {
      id,
      popupContent,
      contentClassName: className,
    } = this.props
    const renderProps = {
      id,
      className: this.getClassName({ cnCtx: cnPopup, className, ...portalParams }),
      ref: this.setContentRef,
    }
    return portal(
      <div {...renderProps}>
        {popupContent}
      </div>
    )
  }

  renderPortalContent = (portalParams) => {
    return (
      <React.Fragment>
        {this.renderPopupControl(portalParams)}
        {this.renderPopupContent(portalParams)}
      </React.Fragment>
    )
  }

  render() {
    const {
      closeOnClickOutside,
      closeOnEscPressed,
      open,
    } = this.props
    const node = document.getElementById(popupsContainerId)
    return (
      <PortalWithState
        node={node}
        onOpen={this.handlePortalOpen}
        onClose={this.handlePortalClose}
        closeOnOutsideClick={closeOnClickOutside}
        closeOnEsc={closeOnEscPressed}
        defaultOpen={open}
      >
        {this.renderPortalContent}
      </PortalWithState>
    )
  }

}

export default Popup

export const FormItemPopup = FormItemHOC(Popup)

// export default withOnClickOutside(Popup) // To use?
