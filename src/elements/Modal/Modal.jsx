/** @module Modal
 *  @class Modal
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.21, 22:58
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
// import withOnClickOutside from 'react-onclickoutside' // To use?
// import { strings } from 'utils'
// import { debounce } from 'throttle-debounce'
// import { PortalWithState } from 'react-portal'
import { Portal } from 'react-portal'
import { // Transitions...
  // Transition,
  CSSTransition,
  // TransitionGroup,
} from 'react-transition-group'
import config from 'config'

import './Modal.pcss'

const cnModal = cn('Modal')

// const doDebug = false // DEBUG!

// const globalClickEventName = 'mousedown'
// const globalKeyPressEventName = 'keydown'
// const globalScrollEventName = 'scroll'
// const globalResizeEventName = 'resize'

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

class Modal extends React.PureComponent /** @lends @Modal.prototype */ {

  static propTypes = {
    // onEscPressed: PropTypes.func,
    // onKeyPress: PropTypes.func,
    // registerCallback: PropTypes.func, // registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    className: PropTypes.string,
    closeOnClickOutside: PropTypes.bool,
    closeOnEscPressed: PropTypes.bool,
    id: PropTypes.string,
    open: PropTypes.bool,
    // popupContent: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    // popupControl: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    setModalNodeRef: PropTypes.func,
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
    open: false,
    setModalNodeRef: null,
  }

  delayedClickTimerHandler = null
  globalHandlersRegistered = false
  domNode = null

  // Lifecycle...

  constructor(props) {
    super(props)
    // const popupsInited = config.popups.isInited
    this.state = {
      popupsInited: false,
      show: false,
    }
    config.popups.initPromise.then(this.setPopupsInited)
    // this.registerGlobalHandlers()
  }

  componentWillUnmount() {
    // this.unregisterGlobalHandlers()
  }

  /* // getDiff(obj1, obj2) {
   *   const keys = Object.keys(obj1)
   *   Object.keys(obj2).forEach(key => {
   *     if (!keys.includes(key)) {
   *       keys.push(key)
   *     }
   *   })
   *   let diffsCount = 0
   *   const diff = keys.reduce((diff, key) => {
   *     const val1 = obj1[key]
   *     const val2 = obj2[key]
   *     if (val1 !== val2) {
   *       // if (key === 'children') {
   *       //   const diff = difference(obj2, obj1)
   *       //   console.log(diff)
   *       //   debugger
   *       // }
   *       diffsCount++
   *       diff[key] = [val1, val2]
   *     }
   *     return diff
   *   }, {})
   *   return !!diffsCount && diff
   * }
   * shouldComponentUpdate(nextProps, nextState) {
   *   const prevProps = this.props
   *   const prevState = this.state
   *   const props = (prevProps !== nextProps) && difference(prevProps, nextProps) // this.getDiff(prevProps, nextProps)
   *   const state = (prevState !== nextState) && difference(prevState, nextState) // this.getDiff(prevState, nextState)
   *   const diffObjs = {
   *     props,
   *     state,
   *     // prevProps,
   *     // nextProps,
   *     // prevState,
   *     // nextState,
   *   }
   *   [>
   *    * let diffsCount = 0
   *    * let diffs = {}
   *    * Object.entries(diffObjs).forEach(([key, val]) => {
   *    *   if (val) {
   *    *     diffsCount++
   *    *     if (typeof val === 'object') {
   *    *       diffs = { ...diffs, ...val }
   *    *     }
   *    *     else {
   *    *       diffs[key] = val
   *    *     }
   *    *   }
   *    * })
   *    * const hasDiffs = !!diffsCount
   *    <]
   *   console.log('shouldComponentUpdate', diffObjs)
   *   return true
   * }
   */

  componentDidUpdate(prevProps, prevState) {
    const prevPropsShow = prevProps.show
    const prevStateShow = prevState.show
    const nextProps = this.props
    const nextState = this.state
    const propsShow = nextProps.show
    const stateShow = nextState.show
    // const props = (prevProps !== nextProps) && difference(prevProps, nextProps) // this.getDiff(prevProps, nextProps)
    // const state = (prevState !== nextState) && difference(prevState, nextState) // this.getDiff(prevState, nextState)
    // const diffObjs = {
    //   props,
    //   state,
    //   // prevProps,
    //   // nextProps,
    //   // prevState,
    //   // nextState,
    // }
    if (/* propsShow !== prevPropsShow && */ propsShow !== stateShow) { // New show from props
      // console.log('componentDidUpdate', diffObjs)
      console.log('componentDidUpdate', {
        show: propsShow,
        propsShow,
        stateShow,
        prevPropsShow,
        prevStateShow,
      })
      this.setState({
        show: propsShow,
      }/* , this.updateShowWithState */)
    // else if (stateShow !== prevState.show) { // New show from state
    //   this.updateShowWithState(this.state)
    }
    // this.afterRender()
  }

  // Helpers...

  setPopupsInited = () => {
    this.setState({ popupsInited: true })
    const { show } = this.props
    this.setState({ show })
  }

  // External methods...

  close = () => { // External method for using in `ModalStack`
    // const { isOpen, closePortal } = this
    // if (isOpen && typeof closePortal === 'function') {
    //   closePortal()
    // }
  }

  open = () => { // External method for using in `ModalStack`
    // const { isOpen, openPortal } = this
    // if (!isOpen && typeof openPortal === 'function') {
    //   openPortal()
    // }
  }

  updateGeometry = () => null // External method stub

  // Handlers...

  setDomRef = (domNode) => {
    this.domNode = domNode
  }

  clearContentGeometry() { // UNUSED? Must be used on content update (using registrable callback; see example in constructor).
    Object.keys(this.geometry).forEach(key => {
      if (key.startsWith('content')) {
        this.geometry[key] = null
      }
    })
  }

  handlePortalOpen = () => {
    // TODO: Register/unregister popup in `ModalStack`
    this.updateGeometryInstant()
    this.registerGlobalHandlers()
    this.isOpen = true
  }

  handlePortalClose = () => {
    // TODO: Register/unregister popup in `ModalStack`
    this.wasOpen = true
    this.unregisterGlobalHandlers()
    this.isOpen = false
    this.clearContentGeometry() // Due to content is destroyed when hidden
  }

  // Render helpers...

  getClassName() {
    const {
      id,
      className,
      // fullWidth,
    } = this.props
    // const {
    //   show,
    // } = this.state
    // console.log('show:', show)
    // debugger
    return cnModal({
      id,
      // show,
      // open: isOpen,
      // fullWidth,
    }, [/* this.props. */ className])
  }

  // Render...

  renderModal() {
    const { id } = this.props
    const { show } = this.state
    const renderProps = {
      id,
      className: this.getClassName(),
      ref: this.setDomRef,
      // style: { border: '1px solid red' }
    }
    /* // TRY: css-transitions
     * <TransitionGroup className={cnModal('TransitionGroup')}>
     *   <CSSTransition
     *     key={id}
     *     timeout={5000}
     *     // timeout={config.css.animateTimeout}
     *     classNames={cnModal('Transition')}
     *   >
     *     <div {...renderProps}>
     *       {popupContent}
     *     </div>
     *   </CSSTransition>
     * </TransitionGroup>
     * <CSSTransition
     *   key={id}
     *   timeout={5000}
     *   // timeout={config.css.animateTimeout}
     *   classNames={transitionClassNames}
     * >
     *   <div {...renderProps}>
     *     Modal {id}
     *   </div>
     * </CSSTransition>
     */
    return (
      <CSSTransition
        key={id}
        // timeout={3000}
        timeout={config.css.transitionTime}
        in={show}
        classNames={cnModal('Transition')}
      >
        <div {...renderProps}>
          Modal {id}
        </div>
      </CSSTransition>
    )
  }

  render() {
    const { popupsInited } = this.state
    return popupsInited && (
      <Portal
        node={config.popups.domNode}
      >
        {this.renderModal()}
      </Portal>
    )
  }

}

export default Modal
