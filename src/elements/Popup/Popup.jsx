/** @module Popup
 *  @class Popup
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.15, 21:59
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'
// import withOnClickOutside from 'react-onclickoutside' // To use?
import { strings } from 'utils'

import './Popup.pcss'

const cnPopup = cn('Popup')

const delayedClickTimeout = 200

const domNodeGeometryKeys = [
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
  'offsetHeight',
]

const globalGeometryKeys = {
  viewWidth: { obj: window, key: 'innerWidth' },
  viewHeight: { obj: window, key: 'innerHeight' },
  scrollX: { obj: window },
  scrollY: { obj: window },
}

const globalClickEventName = 'mousedown'
const globalKeyPressEventName = 'keydown'
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

  globalClickHandler = () => {
    // console.log('Popup:globalClickHandler (set handler)', this.delayedClickTimerHandler)
    this.clearDelayedClickTimerHandler()
    this.delayedClickTimerHandler = setTimeout(this.delayedGlobalClickHandler, delayedClickTimeout)
  }

  globalKeyPressHandler = (event) => {
    var { keyCode } = event
    const {
      id,
      onKeyPress,
      onEscPressed,
      closeOnEscPressed,
    } = this.props
    const cbProps = { event, id, keyCode }
    if (typeof onKeyPress === 'function') {
      onKeyPress(cbProps)
    }
    const isEsc = keyCode === 27 // Esc?
    if (isEsc) {
      if (typeof onEscPressed === 'function') {
        onEscPressed(cbProps)
      }
      if (closeOnEscPressed) {
        this.setState({ show: false })
      }
    }
  }

  globalScrollHandler = (/* event */) => {
    this.updateGeometry()
  }

  globalResizeHandler = (/* event */) => {
    this.updateGeometry()
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

  updateGeometry = () => {
    const origGeometry = this.geometry
    const controlGeometry = this.getDomNodeGeometry(this.controlDomNode, 'control')
    const globalGeometry = this.getGlobalGeometry()
    const geometry = { ...globalGeometry, ...controlGeometry } // + ...contentGeometry
    const updatedGeometryKeys = this.getUpdatedGeometryKeys(geometry)
    // TODO: contentGeometry (contentOffsetWidth, contentOffsetHeight)
    // Calcs: see `201215-PopupLayout.psd`
    // controlViewOffsetTop = controlOffsetTop - scrollY // = 914 - 25 = 889
    // controlViewOffsetBottom = controlViewOffsetTop + controlOffsetHeight // = 889 + 32 = 921
    // controlViewOffsetBottom(b:from-bottom) = viewHeight - controlViewOffsetTop - controlOffsetHeight // = 979 - 889 - 32 = 58
    // Default position: from (bottom, left) -> down
    // TODO: Check controlViewOffsetBottom + contentHeight > viewHeight => display content from (top, *) -> up
    // TODO: Horizontal checking?
    // TODO: Check controlViewOffsetRight + contentWidth > viewWidth => display content from (*, right) -> left (?)
    console.log('Popup:updateGeometry', {
      updatedGeometryKeys,
      controlGeometry,
      geometry,
      origGeometry,
    })
    debugger
    // Store geometry data object
    this.geometry = geometry
  }

  registerGlobalHandlers() {
    const { closeOnClickOutside } = this.props
    if (!this.globalHandlersRegistered) {
      this.globalHandlersRegistered = true
      this.updateGeometry()
      if (closeOnClickOutside) {
        document.addEventListener(globalClickEventName, this.globalClickHandler)
      }
      document.addEventListener(globalKeyPressEventName, this.globalKeyPressHandler)
      document.addEventListener(globalScrollEventName, this.globalScrollHandler)
      window.addEventListener(globalResizeEventName, this.globalResizeHandler)
    }
  }
  unregisterGlobalHandlers() {
    const { closeOnClickOutside } = this.props
    if (this.globalHandlersRegistered) {
      this.globalHandlersRegistered = false
      if (closeOnClickOutside) {
        this.clearDelayedClickTimerHandler()
        document.removeEventListener(globalClickEventName, this.globalClickHandler)
      }
      document.removeEventListener(globalKeyPressEventName, this.globalKeyPressHandler)
      document.removeEventListener(globalScrollEventName, this.globalScrollHandler)
      window.removeEventListener(globalResizeEventName, this.globalResizeHandler)
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
    const { showPopup, registerHideStopper } = props
    this.state = {
      // show: false, // Is content element displaying now?
      // wasShown: false, // Memorized state: did content element once displayed?
      show: showPopup, // Is content element displaying now?
      wasShown: showPopup, // Memorized state: did content element once displayed?
    }
    if (typeof registerHideStopper === 'function') { // External hide canceler (FormSelect: on Menu click etc)
      registerHideStopper(this.clearDelayedClickTimerHandler)
    }
  }

  componentDidMount() {
    const { show } = this.state
    if (show) {
      this.registerGlobalHandlers()
    }
  }

  componentWillUnmount() {
    this.unregisterGlobalHandlers()
    // TODO: unregisterHideStopper -- is it required?
  }

  componentDidUpdate(prevProps, prevState) {
    const prevShowPopup = prevProps.showPopup
    const showPopup = this.props.showPopup
    if (prevShowPopup !== showPopup) {
      this.setState(({ wasShown }) => ({
        show: showPopup,
        wasShown: wasShown || showPopup,
      }), this.updateGlobalClickHandlerByState)
    }
    else if (prevState.show !== this.state.show) {
      this.updateGlobalClickHandlerByState(this.state)
    }
  }

  // Handlers...

  onControlClick = ({ show }) => {
    this.clearDelayedClickTimerHandler()
    if (show == null) { // Toggle state if no value passed
      show = !this.state.show
    }
    this.setState(({ wasShown }) => ({
      show,
      wasShown: wasShown || show,
    }))
    const { onControlClick } = this.props
    if (typeof onControlClick === 'function') {
      onControlClick({ show })
    }
  }

  /* // UNUSED? handleClickOutside -- form withOnClickOutside
   * handleClickOutside = (ev) => {
   *   console.log(ev)
   *   debugger
   * }
   */

  // Render helpers...

  getClassName() {
    const {
      id,
    } = this.props
    const {
      show,
      // wasShown,
    } = this.state
    const className = cnPopup({
      id,
      show,
    }, [this.props.className])
    return className
  }

  // Handlers...

  setDomRef = (domNode) => {
    this.domNode = domNode
  }

  setControlRef = (domNode) => {
    this.controlDomNode = domNode
  }

  // Render...

  renderPopupControl() {
    const { popupControl } = this.props

    const {
      show,
      // wasShown,
    } = this.state

    const controlProps = popupControl && popupControl.props

    const content = {
      ...popupControl,
      props: {
        ...controlProps,
        onClick: /* controlProps.onControlClick || */ this.onControlClick,
        checked: show,
        setDomRef: this.setControlRef,
      },
    }

    return (
      <div className={cnPopup('ControlWrapper')}>
        {content}
      </div>
    )
  }

  renderPopupContent() {
    const { popupContent } = this.props

    const {
      show,
      wasShown,
    } = this.state

    if (!show && !wasShown) { // Content hidden and was not initialized
      return null
    }

    return (
      <div className={cnPopup('ContentWrapper', { show })}>
        {popupContent}
      </div>
    )
  }

  render() {

    const {
      id,
      // onChange,
    } = this.props

    const renderProps = {
      id,
      className: this.getClassName(),
      ref: this.setDomRef,
    }

    const renderPopupControl = this.renderPopupControl()
    const renderPopupContent = this.renderPopupContent()

    return (
      <div {...renderProps}>
        {renderPopupControl}
        {renderPopupContent}
      </div>
    )
  }

}

export default Popup
// export default withOnClickOutside(Popup) // To use?
