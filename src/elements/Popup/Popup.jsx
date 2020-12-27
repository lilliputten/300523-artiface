/** @module Popup
 *  @class Popup
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.18, 02:34
 *
 *  TODO 2020.12.18, 01:50 -- Popup: Reset both `storedContentSize` if content changed (use registrable handler)?
 *  TODO 2020.12.18, 02:15 -- Popup: Use static `PopupStack` component and close same-level (from stack end to first `Modal` or stack begin) popups
 *  TODO 2020.12.19, 03:35 -- Popup: Use nearest scrollable container ancestor as popup base? Or clip to it bounds? Or hide popup if countrol is (partially) out of this bounds?
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure'
import { strings } from 'utils'
import { debounce } from 'throttle-debounce'
import FormItemHOC from 'forms/FormItemHOC'
// import { PortalWithState } from 'react-portal'
// import { Portal } from 'react-portal'
import ModalPortal, { passModalPortalProps } from 'elements/ModalPortal'
/* UNUSED: Transitions
 * import { // Transitions...
 *   CSSTransition,
 *   TransitionGroup,
 * } from 'react-transition-group'
 */
import config from 'config'

import './Popup.pcss'

const cnPopup = cn('Popup')
const cnPopupControl = cn('PopupControl')

const doDebug = /*DEBUG*/ true && config.build.DEV_DEBUG || // DEBUG!
  false

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
    closeOnClickOutside: true,
    closeOnEscPressed: true,
    open: false,
  }

  delayedClickTimerHandler = null
  globalHandlersRegistered = false
  controlDomNode = null
  contentDomNode = null
  geometry = {}

  // From ModalPortal:
  windowDomNode = null
  wrapperDomNode = null
  ModalPortal = null

  // Lifecycle...

  constructor(props) {
    super(props)
    this.state = {
      open: null, // null -- uninitialized
    }
    this.updateGeometry = debounce(debouncedUpdateGeometryTimeout, this.updateGeometryInstant)
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
    // if (this.props.id === 'withMenu' && id === 'control') {
    //   console.log(domNode, rect, domNodeGeometryKeys, geometry)
    //   debugger
    // }
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
    const domNode = this.windowDomNode // contentDomNode
    if (!domNode) { // Error?
      const error = new Error('Popup:updateContentWidth: target dom node is undefined')
      console.error(error) // eslint-disable-line no-console
      debugger // eslint-disable-line no-debugger
      // throw error
      return
    }
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
    if (domNode && domNode.style.width !== setWidth) {
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
    const domNode = this.windowDomNode // contentDomNode
    if (!domNode) { // Error?
      const error = new Error('Popup:updateOneAxisContentPos: target dom node is undefined')
      console.error(error) // eslint-disable-line no-console
      debugger // eslint-disable-line no-debugger
      // throw error
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
    const { open } = this.state
    if (!open) { // Do nothing if popup is closed
      console.log('Popup:updateGeometryInstant: SKIPED (closed)')
      return
    }
    const { id, fullWidth } = this.props
    // TODO: Call `updateGeometryInstant` on content update? How? Use timer?
    const controlGeometry = this.getDomNodeGeometry(this.controlDomNode, 'control')
    const contentGeometry = this.getDomNodeGeometry(this.windowDomNode, 'content')
    // const contentGeometry = this.getDomNodeGeometry(this.contentDomNode, 'content')
    // const windowGeometry = this.getDomNodeGeometry(this.windowDomNode, 'window')
    const globalGeometry = this.getGlobalGeometry()
    const geometry = {
      ...globalGeometry,
      ...controlGeometry,
      ...contentGeometry,
      // ...windowGeometry,
    }
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
    // DEBUG (use doDebug?)...
    console.log('Popup:updateGeometryInstant', {
      controlGeometry,
      contentGeometry,
      updatedGeometryKeys,
      changedHorizontalKeys,
      changedVerticalKeys,
      // geometry,
      // 'this.geometry': this.geometry,
      'changed geometry': Object.entries(geometry).reduce((result, [key, val]) => {
        return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
      }, {}),
      'changed this.geometry': Object.entries(this.geometry).reduce((result, [key, val]) => {
        return updatedGeometryKeys.includes(key) ? { ...result, [key]: val } : result
      }, {}),
    })
    // if (id === 'withMenu') {
    //   debugger
    // }
    if (!updatedGeometryKeys.length) { // Do nothing if no changes detected
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
      cnCtx,
      className,
    } = params
    const {
      id,
      fullWidth,
    } = this.props
    const { open } = this.state
    return cnCtx && cnCtx({
      id,
      open,
      fullWidth,
    }, [/* this.props. */className])
  }

  // External methods...

  // Provide ModalPortal public methods...

  open = () => this.ModalPortal && this.ModalPortal.open()
  close = () => this.ModalPortal && this.ModalPortal.close()
  toggle = (open) => this.ModalPortal && this.ModalPortal.toggle(open)
  isVisible = () => this.ModalPortal && this.ModalPortal.isVisible()

  // Handlers...

  onActivate = () => {
    console.log('Popup:onActivate')
    setTimeout(this.updateGeometryInstant, 0)
  }
  onDeactivate = () => {
    console.log('Popup:onDeactivate')
    this.clearContentGeometry() // Due to content is destroyed when hidden
  }

  handleOpenState = ({ open }) => {
    console.log('Popup:handleOpenState', open)
    this.setState({ open }, this.updateOpenOrCloseWithState) // Update own open state
    const { id, handleOpenState } = this.props
    if (typeof handleOpenState === 'function') {
      handleOpenState({ id, open })
    }
  }

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
    // this.updateGeometry()
    this.registerGlobalHandlers()
  }

  handlePortalClose = () => {
    // TODO: Register/unregister popup in `PopupStack`
    this.unregisterGlobalHandlers()
    // this.clearContentGeometry() // Due to content is destroyed when hidden
  }

  updateOpenOrCloseWithState = () => {
    if (this.state.open) {
      this.handlePortalOpen()
    }
    else {
      this.handlePortalClose()
    }
  }

  onControlClick = (/* event */) => {
    const { id } = this.props
    const { open } = this.state
    const nextOpen = !open
    console.log('Popup:onControlClick', id, nextOpen, open)
    this.setState({ open: nextOpen }, this.updateOpenOrCloseWithState) // Update own open state
    // TODO: Notify `PopupsContainer` when popup opens for closing all other popups from same level (before first modal in popups stack). (Now user can open several popups at the same time.
    const { onControlClick } = this.props
    if (typeof onControlClick === 'function') {
      onControlClick({ id, open: nextOpen })
    }
  }

  // Render...

  renderControl() {
    const {
      id,
      popupControl,
      className,
    } = this.props
    const { open } = this.state

    // TODO: Cache modified `popupControl` in state?
    const content = React.cloneElement(popupControl, {
      onClick: this.onControlClick,
      checked: open,
      setDomRef: this.setControlRef,
    })

    const renderProps = {
      id,
      className: this.getClassName({ cnCtx: cnPopupControl, className }),
      ref: this.setControlRef,
    }
    return (
      <div {...renderProps}>
        {content}
      </div>
    )
  }

  renderPortalContent = (portalProps) => {
    const { ModalPortal, windowDomNode, wrapperDomNode } = portalProps
    if (ModalPortal) { // Save wrapping ModalPortal instance refernce
      // console.log('Popup:renderPortalContent: updated ModalPortal')
      this.ModalPortal = ModalPortal // Save ModalPortal handler (TODO)
      this.windowDomNode = windowDomNode
      this.wrapperDomNode = wrapperDomNode
    }
    // debugger
    const {
      id,
      popupContent,
      contentClassName: className,
    } = this.props
    const renderProps = {
      id,
      className: this.getClassName({ cnCtx: cnPopup, className }),
      ref: this.setContentRef, // Will be used windowDomNode from ModalPortal
    }
    return (
      <div {...renderProps}>
        {popupContent}
      </div>
    )
  }

  renderContent() {
    const portalProps = passModalPortalProps.reduce((data, id) => {
      return { ...data, [id]: this.props[id] }
    }, {})
    if (this.state.open != null) {
      portalProps.open = this.state.open
    }
    Object.assign(portalProps, {
      handleOpenState: this.handleOpenState,
      onActivate: this.onActivate,
      onDeactivate: this.onDeactivate,
    })
    return (
      <ModalPortal {...portalProps} type="Popup">
        {this.renderPortalContent}
      </ModalPortal>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderControl()}
        {this.renderContent()}
      </React.Fragment>
    )
  }

}

export default Popup

export const FormItemPopup = FormItemHOC(Popup)
