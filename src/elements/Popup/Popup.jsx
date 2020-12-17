/** @module Popup
 *  @class Popup
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.18, 01:32
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'
// import withOnClickOutside from 'react-onclickoutside' // To use?
import { strings } from 'utils'
import { debounce } from 'throttle-debounce'
import FormItemHOC from 'forms/FormItemHOC'
import { PortalWithState } from 'react-portal'

import config from 'config'

import './Popup.pcss'

const cnPopup = cn('Popup')
const cnPopupControl = cn('PopupControl')

// const delayedClickTimeout = 150
const debouncedUpdateGeometryTimeout = 50

const updateGeometryTimerDelay = 100 // 0 - Update by timer is disabled, must be above than debounce delay (`debouncedUpdateGeometryTimeout`, above)

const domNodeGeometryKeys = [
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
  'offsetHeight',
  'clientWidth',
  'clientHeight',
]
const verticalGeometryKeys = [ // eslint-disable-line no-unused-vars
  'contentClientHeight',
  'contentOffsetHeight',
  'contentOffsetTop',
  'controlClientHeight',
  'controlOffsetHeight',
  'controlOffsetTop',
  'scrollY',
  'viewHeight',
]
const horizontalGeometryKeys = [ // eslint-disable-line no-unused-vars
  'contentClientWidth',
  'contentOffsetWidth',
  'contentOffsetLeft',
  'controlClientWidth',
  'controlOffsetWidth',
  'controlOffsetLeft',
  'scrollX',
  'viewWidth',
]
/* // const contentGeometryKeys = [
 *   'contentClientHeight',
 *   'contentOffsetHeight',
 *   'contentOffsetTop',
 *   'contentClientWidth',
 *   'contentOffsetWidth',
 *   'contentOffsetLeft',
 * ]
 */

const globalGeometryKeys = {
  viewWidth: { obj: window, key: 'innerWidth' },
  viewHeight: { obj: window, key: 'innerHeight' },
  scrollX: { obj: window },
  scrollY: { obj: window },
}

const axisKeys = { // Used in `updateOneAxisContentPos`
  // Regexp to convert vertical axis keys to horizontal:
  // '<,'>S/top/left/g | '<,'>S/bottom/right/g | '<,'>S/height/width/g | '<,'>S/vertical/horizontal/g
  vertical: {
    viewSize: 'viewHeight',
    controlPos: 'controlOffsetTop',
    controlSize: 'controlOffsetHeight',
    scroll: 'scrollY',
    contentPos: 'contentOffsetTop',
    contentSize: 'contentOffsetHeight',
    contentStylePos: 'top',
    contentStyleSize: 'height',
    contentStyleMaxSize: 'maxHeight',
    // contentStyleMaxSize: 'max-height',
    storedContentSize: 'storedContentHeight', // Stored in dom node
  },
  horizontal: {
    viewSize: 'viewWidth',
    controlPos: 'controlOffsetLeft',
    controlSize: 'controlOffsetWidth',
    scroll: 'scrollY',
    contentPos: 'contentOffsetLeft',
    contentSize: 'contentOffsetWidth',
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

class Popup extends React.PureComponent /** @lends @Popup.prototype */ {

  static propTypes = {
    className: PropTypes.string,
    // closeOnClickOutside: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]), // true, false, 'force'
    closeOnClickOutside: PropTypes.bool,
    closeOnEscPressed: PropTypes.bool,
    id: PropTypes.string,
    onControlClick: PropTypes.func,
    onEscPressed: PropTypes.func,
    onKeyPress: PropTypes.func,
    popupContent: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    popupControl: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    registerHideStopper: PropTypes.func, // registerHideStopper(handler = this.clearDelayedClickTimerHandler) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    showPopup: PropTypes.bool,
  }

  static defaultProps = {
    className: null,
    closeOnClickOutside: true,
    closeOnEscPressed: true,
    id: null,
    onControlClick: null,
    onEscPressed: null,
    onKeyPress: null,
    // popupContent: null,
    // popupControl: null,
    registerHideStopper: null,
    showPopup: false,
  }

  delayedClickTimerHandler = null
  globalHandlersRegistered = false
  controlDomNode = null
  contentDomNode = null
  geometry = {}

  // Helpers...

  delayedGlobalClickHandler = () => { // Close popup
    // console.log('Popup:delayedGlobalClickHandler')
    this.setState({ show: false })
  }

  clearDelayedClickTimerHandler = () => {
    // console.log('Popup:clearDelayedClickTimerHandler', this.delayedClickTimerHandler)
    if (this.delayedClickTimerHandler) {
      clearTimeout(this.delayedClickTimerHandler)
      this.delayedClickTimerHandler = null
    }
  }

  /* // globalClickHandler = () => {
   *   // console.log('Popup:globalClickHandler (set handler)', this.delayedClickTimerHandler)
   *   this.clearDelayedClickTimerHandler()
   *   this.delayedClickTimerHandler = setTimeout(this.delayedGlobalClickHandler, delayedClickTimeout)
   * }
   */

  /* // globalKeyPressHandler = (event) => {
   *   var { keyCode } = event
   *   const {
   *     id,
   *     onKeyPress,
   *     onEscPressed,
   *     closeOnEscPressed,
   *   } = this.props
   *   const cbProps = { event, id, keyCode }
   *   if (typeof onKeyPress === 'function') {
   *     onKeyPress(cbProps)
   *   }
   *   const isEsc = keyCode === 27 // Esc?
   *   if (isEsc) {
   *     if (typeof onEscPressed === 'function') {
   *       onEscPressed(cbProps)
   *     }
   *     if (closeOnEscPressed) {
   *       this.setState({ show: false })
   *     }
   *   }
   * }
   */

  globalScrollHandler = (/* event */) => {
    this.updateGeometryDebounced()
  }

  globalResizeHandler = (/* event */) => {
    this.updateGeometryDebounced()
  }

  getDomNodeGeometry(domNode, id) {
    id = id || 'default'
    const geometry = domNodeGeometryKeys.reduce((geometry, key) => {
      const val = domNode && domNode[key]
      if (val != null) {
        const resultKey = id + strings.ucFirst(key)
        geometry[resultKey] = val
      }
      return geometry
    }, {})
    return geometry
  }

  getGlobalGeometry() {
    const geometry = Object.entries(globalGeometryKeys).reduce((geometry, [id, descr]) => {
      const obj = descr.obj
      const key = descr.key || id
      const val = obj[key]
      // const isUpdated = (val !== origGeometry[id])
      // if (isUpdated && !updatedGeometryKeys.includes[id]) {
      //   updatedGeometryKeys.push(id)
      // }
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

  updateContentWidth(geometry, updatedGeometryKeys) {
    if (updatedGeometryKeys.includes('controlClientWidth')) {
      const domNode = this.contentDomNode
      const width = geometry.controlClientWidth
      // console.log('Popup:updatedGeometryKeys: Update content wrapper width', width, geometry, updatedGeometryKeys)
      domNode.style.width = width + 'px'
    }
  }

  /** updateOneAxisContentPos -- Calculate content position/size for one axis (horizontal, vertical)
   * @param {String('horizontal'|'vertical')} axis
   * @param {Object} geometry
   * @param {String[]} updatedGeometryKeys
   */
  updateOneAxisContentPos(axis, geometry, updatedGeometryKeys) {
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
    const controlPos = geometry[keys.controlPos] // controlOffsetTop
    const controlSize = geometry[keys.controlSize] // controlOffsetHeight
    const scroll = geometry[keys.scroll] // scrollY
    const contentPos = geometry[keys.contentPos] // contentOffsetTop
    const contentSize = geometry[keys.contentSize] // contentClientHeight

    const storedContentSize = domNode[keys.storedContentSize]
    const contentMaxSize = storedContentSize || contentSize
    if (!storedContentSize || contentSize > storedContentSize) { // Save (maximum) height
      domNode[keys.storedContentSize] = contentSize
    }

    const viewStart = popupContentGap
    const viewEnd = viewSize - popupContentGap

    // Calculate control coordinates...
    const controlScreenPos = controlPos - scroll // = 914 - 25 = 889
    const controlScreenEnd = controlScreenPos + controlSize // = 889 + 32 = 921
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

    /* // DEBUG...
     * console.log('Popup:updateOneAxisContentPos', { // eslint-disable-line no-console
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
     *   // geometry: geometry,
     *   // 'this.geometry': this.geometry,
     *   'changed geometry': Object.entries(geometry).reduce((result, [key, val]) => {
     *     if (updatedGeometryKeys.includes(key)) {
     *       result[key] = val
     *     }
     *     return result
     *   }, {}),
     *   'changed this.geometry': Object.entries(this.geometry).reduce((result, [key, val]) => {
     *     if (updatedGeometryKeys.includes(key)) {
     *       result[key] = val
     *     }
     *     return result
     *   }, {}),
     * })
     */
  }

  updateGeometry = () => { // UNUSED? TODO? Update geometry
    // const { fullWidth } = this.props
    // TODO: Call `updateGeometry` on content update? How? Use timer?
    const controlGeometry = this.getDomNodeGeometry(this.controlDomNode, 'control')
    const contentGeometry = this.getDomNodeGeometry(this.contentDomNode, 'content')
    const globalGeometry = this.getGlobalGeometry()
    const geometry = { ...globalGeometry, ...controlGeometry, ...contentGeometry }
    /* Sample geometry keys:
     * contentClientHeight
     * contentClientWidth
     * contentOffsetHeight
     * contentOffsetLeft
     * contentOffsetTop
     * contentOffsetWidth
     * controlClientHeight
     * controlClientWidth
     * controlOffsetHeight
     * controlOffsetLeft
     * controlOffsetTop
     * controlOffsetWidth
     * scrollX
     * scrollY
     * viewHeight
     * viewWidth
     */
    // console.log(this.geometry.contentOffsetLeft)
    // debugger
    const updatedGeometryKeys = this.getUpdatedGeometryKeys(geometry)
    const changedHorizontalKeys = horizontalGeometryKeys.some(key => updatedGeometryKeys.includes(key))
    const changedVerticalKeys = verticalGeometryKeys.some(key => updatedGeometryKeys.includes(key))
    /*
     * // DEBUG...
     * console.log('Popup:updateGeometry', {
     *   updatedGeometryKeys,
     *   // changedHorizontalKeys,
     *   // changedVerticalKeys,
     *   geometry,
     *   'this.geometry': this.geometry,
     * })
     */
    // debugger
    if (!updatedGeometryKeys.length) { // Do not nothing if no changed
      return
    }
    // Store geometry data object
    // this.updateContentPos(geometry, updatedGeometryKeys)
    changedHorizontalKeys && this.updateOneAxisContentPos('horizontal', geometry, updatedGeometryKeys) // Update horizontal position & size...
    changedVerticalKeys && this.updateOneAxisContentPos('vertical', geometry, updatedGeometryKeys) // Update vertical position & size...
    // if (changedHorizontalKeys && fullWidth) { // TODO?
    //   this.updateContentWidth(geometry, updatedGeometryKeys)
    // }
    this.geometry = geometry
    // console.log(this.geometry.contentOffsetLeft)
    // debugger
  }

  registerGlobalHandlers() {
    if (!this.globalHandlersRegistered) {
      this.globalHandlersRegistered = true
      // this.updateGeometryDebounced() // ???
      // if (this.props.closeOnClickOutside) {
      //   document.addEventListener(globalClickEventName, this.globalClickHandler)
      // }
      // document.addEventListener(globalKeyPressEventName, this.globalKeyPressHandler)
      document.addEventListener(globalScrollEventName, this.globalScrollHandler)
      window.addEventListener(globalResizeEventName, this.globalResizeHandler)
      if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
        this.updateGeometryTimer = setInterval(this.updateGeometryDebounced, updateGeometryTimerDelay)
      }
    }
  }
  unregisterGlobalHandlers() {
    if (this.globalHandlersRegistered) {
      this.globalHandlersRegistered = false
      // if (this.props.closeOnClickOutside) {
      //   this.clearDelayedClickTimerHandler()
      //   document.removeEventListener(globalClickEventName, this.globalClickHandler)
      // }
      // document.removeEventListener(globalKeyPressEventName, this.globalKeyPressHandler)
      document.removeEventListener(globalScrollEventName, this.globalScrollHandler)
      window.removeEventListener(globalResizeEventName, this.globalResizeHandler)
      if (this.updateGeometryTimer) {
        clearInterval(this.updateGeometryTimer)
        this.updateGeometryTimer = null
      }
    }
  }

  updateGlobalClickHandlerByState = (state) => {
    const { show } = state
    if (show) {
      this.registerGlobalHandlers()
    }
    else {
      this.unregisterGlobalHandlers()
    }
  }

  // Lifecycle...

  constructor(props) {
    super(props)
    // const { defaultOpen } = props
    // const { showPopup, registerHideStopper } = props
    this.state = {
      // show: showPopup, // Is content element displaying now?
      // wasShown: showPopup, // Memorized state: did content element once displayed?
    }
    // if (typeof registerHideStopper === 'function') { // External hide canceler (FormSelect: on Menu click etc)
    //   registerHideStopper(this.clearDelayedClickTimerHandler)
    // }
    this.updateGeometryDebounced = debounce(debouncedUpdateGeometryTimeout, this.updateGeometry)
  }

  // componentDidMount() {
  //   const { show } = this.state
  //   if (show) {
  //     this.registerGlobalHandlers()
  //   }
  // }

  componentWillUnmount() {
    this.unregisterGlobalHandlers()
    // TODO: unregisterHideStopper -- is it required?
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevShowPopup = prevProps.showPopup
  //   const showPopup = this.props.showPopup
  //   if (this.state && !prevState.wasShown) {
  //     this.updateGeometryDebounced()
  //   }
  //   if (prevShowPopup !== showPopup) {
  //     this.setState(({ wasShown }) => {
  //       // if (!prevShowPopup.wasShown && showPopup) {
  //       // }
  //       return {
  //         show: showPopup,
  //         wasShown: wasShown || showPopup,
  //       }
  //     }, this.updateGlobalClickHandlerByState)
  //   }
  //   else if (prevState.show !== this.state.show) {
  //     this.updateGlobalClickHandlerByState(this.state)
  //   }
  // }

  // Handlers...

  // onControlClick = ({ show }) => {
  //   this.clearDelayedClickTimerHandler()
  //   if (show == null) { // Toggle state if no value passed
  //     show = !this.state.show
  //   }
  //   // console.log('Popup:onControlClick', { show })
  //   this.setState(({ wasShown }) => ({
  //     show,
  //     wasShown: wasShown || show,
  //   }))
  //   const { onControlClick } = this.props
  //   if (typeof onControlClick === 'function') {
  //     onControlClick({ show })
  //   }
  // }

  /* // UNUSED? handleClickOutside -- form withOnClickOutside
   * handleClickOutside = (ev) => {
   *   console.log(ev)
   *   debugger
   * }
   */

  // Render helpers...

  getClassName(params) {
    const {
      isOpen,
      cnCtx,
      // openPortal,
      // closePortal,
      // portal,
    } = params
    const {
      id,
      fullWidth,
    } = this.props
    // const {
    //   show,
    //   // wasShown,
    // } = this.state
    const className = cnCtx && cnCtx({
      id,
      show: isOpen,
      fullWidth,
    }, [this.props.className])
    return className
  }

  // Handlers...

  /* // setDomRef = (domNode) => {
   *   this.domNode = domNode
   * }
   */

  setControlRef = (domNode) => {
    this.controlDomNode = domNode
  }

  setContentRef = (domNode) => {
    this.contentDomNode = domNode
  }

  clearContentGeometry() {
    Object.keys(this.geometry).forEach(key => {
      if (key.startsWith('content')) {
        this.geometry[key] = null
      }
    })
  }

  handlePortalOpen = () => {
    this.updateGeometry()
    this.registerGlobalHandlers()
    this.isOpen = true
  }

  handlePortalClose = () => {
    this.wasOpen = true
    this.unregisterGlobalHandlers()
    this.isOpen = false
    // this.clearContentGeometry() // Due to content is destroyed when hidden
  }

  // Render...

  renderPopupControl(portalParams) {
    const {
      isOpen,
      openPortal,
      closePortal,
      // portal,
    } = portalParams
    const { id, popupControl } = this.props
    // const {
    //   show,
    //   // wasShown,
    // } = this.state

    const controlProps = popupControl && popupControl.props

    const content = {
      ...popupControl,
      props: {
        ...controlProps,
        onClick: isOpen ? closePortal : openPortal,
        // onClick: [> controlProps.onControlClick || <] this.onControlClick,
        checked: isOpen,
        setDomRef: this.setControlRef,
      },
    }

    const renderProps = {
      id,
      className: this.getClassName({ cnCtx: cnPopupControl, ...portalParams }),
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
    const { id, popupContent } = this.props
    // const {
    //   show,
    //   wasShown,
    // } = this.state
    // if (!show && !wasShown) { // Content hidden and was not initialized
    //   return null
    // }
    const renderProps = {
      id,
      className: this.getClassName({ cnCtx: cnPopup, ...portalParams }),
      ref: this.setContentRef,
    }
    return portal(
      <div {...renderProps}>
        {popupContent}
      </div>
    )
  }

  renderContent = (portalParams) => {
    // const {
    //   isOpen,
    //   // openPortal,
    //   // closePortal,
    //   // portal,
    // } = portalParams
    // if (isOpen !== this.isOpen) {
    //   if (isOpen) {
    //   }
    //   else {
    //   }
    //   this.isOpen = isOpen
    // }
    // const { id } = this.props
    // const renderProps = {
    //   id,
    //   className: this.getClassName({ isOpen }),
    //   ref: this.setDomRef,
    // }
    // return (
    //   <div {...renderProps}>
    //     {this.renderPopupControl(portalParams)}
    //     {this.renderPopupContent(portalParams)}
    //   </div>
    // )
    return (
      <React.Fragment>
        {this.renderPopupControl(portalParams)}
        {this.renderPopupContent(portalParams)}
      </React.Fragment>
    )
  }

  render() {
    const node = document && document.getElementById('Popups')
    return (
      <PortalWithState
        node={node}
        onOpen={this.handlePortalOpen}
        onClose={this.handlePortalClose}
        closeOnOutsideClick
        closeOnEsc
      >
        {this.renderContent}
      </PortalWithState>
    )
  }

}

export default Popup

export const FormItemPopup = FormItemHOC(Popup)

// export default withOnClickOutside(Popup) // To use?
