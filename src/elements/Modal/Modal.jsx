/** @module Modal
 *  @class Modal
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.25, 15:30
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 */
/* --eslint-disable no-console */

import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'utils/configure'
// import { Portal } from 'react-portal'
// import { // Transitions...
//   // Transition,
//   CSSTransition,
//   // TransitionGroup,
// } from 'react-transition-group'
import config from 'config'

import ModalPortal from 'elements/ModalPortal'

import InlineIcon from 'elements/InlineIcon'
// import Loader from 'elements/Loader'
import FormButton from 'forms/FormButton'

import { ActionsContextProvider } from 'helpers/ActionsContext'

import './Modal-Geometry.pcss'
import './Modal-Themes.pcss'
import './Modal-Transitions.pcss'

const cnModal = cn('Modal')

// const doDebug = false // DEBUG!

// const mouseDownEvent = 'mousedown'
// const mouseUpEvent = 'mouseup'
// const mouseLeaveEvent = 'mouseleave'
// const globalKeyPressEventName = 'keydown'

export const selfCloseActionId = '--modal-self-close--'
export const externalCloseActionId = '--modal-external-close--'

export default class Modal extends React.PureComponent /** @lends @Modal.prototype */ {

  // Props...

  static propTypes = {
    useLoader: PropTypes.bool,
    loading: PropTypes.bool, // Show Loader flashback
    onAction: PropTypes.func, // Event fired on action invoked (see `actions` prop)
    // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalNodeRef: PropTypes.func, // ??? Demo?
    width: PropTypes.string, // Modal window width (predefined variants: xs, sm, md, lg, xl, xxl)
    handleLoaderCancel: PropTypes.func, // Loader onCancel event handler
    actions: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]), // Actions component(s) (TODO: `ActionsContext` must be used)
    closeOnCancelAction: PropTypes.bool, // Auto-close on `cancel` action event
    closeOnClickOutside: PropTypes.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
    closeOnEscPressed: PropTypes.bool, // Close (cancel) modal on esc key pressed
    closeWithCloseButton: PropTypes.bool, // Close (cancel) modal by click on header 'Close' button
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Show icon in header
    id: PropTypes.string, // Modal id
    leftContent: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Content at left of main content and actions (ideal place for large visual icon)
    onActivate: PropTypes.func, // Event fired on activate (before open)
    onClickOutside: PropTypes.func, // Event fired on click outside modal
    onCloseButtonClick: PropTypes.func, // Event fired on header 'Close' button click
    onDeactivate: PropTypes.func, // Event fired on deactivate (unmounting from dom)
    onEscPressed: PropTypes.func, // Event fired on esc key pressed
    onOpen: PropTypes.func, // Event fired on modal open
    onClose: PropTypes.func, // Event fired on modal close
    handleOpenState: PropTypes.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
    open: PropTypes.bool, // Show modal by default
    showCloseButton: PropTypes.bool, // Display close button in header
    title: PropTypes.string, // Modal title
    className: PropTypes.string, // Modal class name
    contentClassName: PropTypes.string, // Content element class name
    windowClassName: PropTypes.string, // Modal window class name
    wrapperClassName: PropTypes.string, // Modal wrapper class name
    theme: PropTypes.string, // Modal theme (default theme for all other themed elements, see `*Theme`)
    iconTheme: PropTypes.string, // Icon theme (using `theme` if not specified)
    windowTheme: PropTypes.string, // Window theme (using `theme` if not specified)
    headerTheme: PropTypes.string, // Header theme (using `theme` if not specified)
    wrapperTheme: PropTypes.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
    loaderTheme: PropTypes.string, // Loader theme ('MediumDark' is default)
  }

  static defaultProps = {
    closeOnClickOutside: true, // Close (with `selfCloseActionId` action id) modal by outisde-click.
    closeOnEscPressed: true, // Close (with `selfCloseActionId` action id) modal by esc-key.
    closeWithCloseButton: true, // Close (with `selfCloseActionId` action id) with 'Close button' (if present in layout -- see `showCloseButton`)
    loaderTheme: 'MediumDark',
    loading: false,
    open: false,
    showCloseButton: false, // Display 'Close button'?
    useLoader: false,
  }

  // Instance variables...
  isOutsideClickWaiting = false
  globalHandlersRegistered = false
  wrapperDomNode = null
  windowDomNode = null
  transitionTime = 0

  resolvingAction = null // Resulting action

  // Lifecycle...

  typeId = 'Modal'

  constructor(props) {
    super(props)
    this.state = {
      open: props.open,
    }
    config.popups.initPromise.then(this.setPopupsInited)
    this.transitionTime = config.css.modalAnimateTime
  }

  componentWillUnmount() {
    this.unregisterGlobalHandlers()
  }

  // Helpers...

  // Handlers...

  handleOpenState = ({ open }) => {
    this.setState({ open })
    const { id, onClose, handleOpenState } = this.props
    if (typeof handleOpenState === 'function') {
      handleOpenState({ id, open })
    }
  }

  onAction = (actionProps) => { // Event handler for ActionContext consumed children
    const actionId = actionProps.id
    const { id, actionsContextNode, autoClose, closeOnCancelAction } = this.props
    // TODO: ModalPortal.setResult(actionId)
    // this.resolvingAction = actionId
    console.log('Modal:onAction', id, actionId)
    debugger;
    if (autoClose || (closeOnCancelAction && actionId === 'cancel')) { // Close and call `resolveAction` when window is closed
      // TODO: ModalPortal.close()
      // this.close()
    }
    else { // ...Or all `resolveAction` immediatelly
      // TODO: ModalPortal.resolveResult()
      // this.resolveAction()
    }
    if (actionsContextNode && typeof actionsContextNode.onAction) {
      actionsContextNode.onAction(actionProps)
    }
  }

  // Handled in ModalPortal: onKeyPress, *OutsideClick*
  onKeyPress = (event) => {
    const {
      id,
      onEscPressed,
      closeOnEscPressed,
      loading,
    } = this.props
    if (!loading) {
      var { keyCode } = event
      const isEscPressed = (keyCode === 27)
      const cbProps = { event, id, keyCode }
      if (isEscPressed) {
        if (closeOnEscPressed) {
          this.resolvingAction = selfCloseActionId
          this.close()
        }
        if (typeof onEscPressed === 'function') {
          onEscPressed(cbProps)
        }
      }
    }
  }

  onCloseButtonClick = () => { // Mouse released on wrapper --> close modal
    const { id, closeWithCloseButton, onCloseButtonClick } = this.props
    console.log('Modal: onCloseButtonClick', id)
    debugger;
    if (closeWithCloseButton) {
      // TODO: ModalPortal.setResult(actionId)
      // this.resolvingAction = selfCloseActionId
      // TODO: ModalPortal.close()
      // this.close()
    }
    if (typeof onCloseButtonClick === 'function') {
      onCloseButtonClick({ id })
    }
  }

  setWindowDomRef = (domNode) => {
    this.windowDomNode = domNode
  }

  setWrapperDomRef = (domNode) => {
    this.wrapperDomNode = domNode
  }

  // Render helpers...

  // Render...

  renderHeaderIcon() {
    const { icon, iconTheme } = this.props
    const theme = iconTheme || this.props.theme
    const showIcon = icon || theme && config.ui.defaultIcons[theme]
    return showIcon && (
      <div key="HeaderIcon" className={cnModal('HeaderIcon', { theme })}>
        <InlineIcon theme={theme} icon={showIcon} />
      </div>
    )
  }
  renderHeaderTitle() {
    const { title } = this.props
    return title && (
      <div key="HeaderTitle" className={cnModal('HeaderTitle')}>
        {title}
      </div>
    )
  }
  renderHeaderCloseButton() {
    const { showCloseButton } = this.props
    return showCloseButton && (
      <div key="HeaderCloseButton" className={cnModal('HeaderCloseButton')}>
        <FormButton
          icon="faTimes"
          largeIcon
          plain
          title="Close window" // TODO; Translate?
          onClick={this.onCloseButtonClick}
        />
        {/* <InlineIcon icon="faTimes" /> */}
      </div>
    )
  }

  renderHeader() {
    const { headerTheme, theme } = this.props
    const content = [
      this.renderHeaderIcon(),
      this.renderHeaderTitle(),
      this.renderHeaderCloseButton(),
    ].filter(Boolean)
    const hasHeader = !!(content && content.length)
    return hasHeader && (
      <div className={cnModal('Header', { theme: headerTheme || theme })}>
        {content}
      </div>
    )
  }

  renderLeftContent() {
    const { leftContent } = this.props
    return leftContent && (
      <div className={cnModal('LeftContent')}>
        {leftContent}
      </div>
    )
  }

  renderContent() {
    const { children, contentClassName } = this.props
    // {[> <div className={cnModal('Container')}> <]}
    // {[> </div> <]}
    return children && (
      <div className={cnModal('Content', [ contentClassName ])}>
        {children}
      </div>
    )
  }

  renderActions() {
    const { actions } = this.props
    return actions && (
      <div className={cnModal('Actions')}>
        <ActionsContextProvider value={this}>
          {actions}
        </ActionsContextProvider>
      </div>
    )
  }

  renderWindow(portalProps) {
    const { ModalPortal } = portalProps
    // console.log(portalProps)
    // debugger
    this.ModalPortal = ModalPortal // Save ModalPortal handler (TODO)
    const { width, windowTheme, theme, windowClassName } = this.props
    return (
      <div
        className={cnModal('Window', { width, theme: windowTheme || theme }, [windowClassName])}
        ref={this.setWindowDomRef}
      >
        {this.renderHeader()}
        <div className={cnModal('Layout')}>
          {this.renderLeftContent()}
          <div className={cnModal('Main')}>
            {this.renderContent()}
            {this.renderActions()}
          </div>
          {/* renderRightContent? */}
        </div>
      </div>
    )
  }

  render() {
    const {
      open,
    } = this.state
    const {
      loading,
    } = this.props
    const modalPortalProps = {
      open,
      loading,
      // TOTO: Other wrapper, window related props...
    }
    return (
      <ModalPortal {...modalPortalProps}>
        {this.renderWindow}
      </ModalPortal>
    )
  }

}
