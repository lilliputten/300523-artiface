/** @module ModalWindow
 *  @class ModalWindow
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

import './ModalWindow-Geometry.pcss'
import './ModalWindow-Themes.pcss'
// import './ModalWindow-Transitions.pcss'

const cnModalWindow = cn('ModalWindow')

// const doDebug = false // DEBUG!

// const mouseDownEvent = 'mousedown'
// const mouseUpEvent = 'mouseup'
// const mouseLeaveEvent = 'mouseleave'
// const globalKeyPressEventName = 'keydown'

export const selfCloseActionId = '--modal-self-close--'
export const externalCloseActionId = '--modal-external-close--'

export default class ModalWindow extends React.PureComponent /** @lends @ModalWindow.prototype */ {

  // Props...

  static propTypes = {
    useLoader: PropTypes.bool,
    loading: PropTypes.bool, // Show Loader flashback
    onAction: PropTypes.func, // Event fired on action invoked (see `actions` prop)
    // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalNodeRef: PropTypes.func, // ??? Demo?
    width: PropTypes.string, // ModalWindow window width (predefined variants: xs, sm, md, lg, xl, xxl)
    handleLoaderCancel: PropTypes.func, // Loader onCancel event handler
    actions: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]), // Actions component(s) (TODO: `ActionsContext` must be used)
    closeOnCancelAction: PropTypes.bool, // Auto-close on `cancel` action event
    closeOnClickOutside: PropTypes.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
    closeOnEscPressed: PropTypes.bool, // Close (cancel) modal on esc key pressed
    closeWithCloseButton: PropTypes.bool, // Close (cancel) modal by click on header 'Close' button
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Show icon in header
    id: PropTypes.string, // ModalWindow id
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
    title: PropTypes.string, // ModalWindow title
    className: PropTypes.string, // ModalWindow class name
    contentClassName: PropTypes.string, // Content element class name
    windowClassName: PropTypes.string, // ModalWindow window class name
    wrapperClassName: PropTypes.string, // ModalWindow wrapper class name
    theme: PropTypes.string, // ModalWindow theme (default theme for all other themed elements, see `*Theme`)
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

  // Lifecycle...

  // typeId = 'ModalWindow'

  constructor(props) {
    super(props)
    // this.state = {
    //   // open: props.open,
    // }
    config.popups.initPromise.then(this.setPopupsInited)
  }

  componentWillUnmount() {
    this.unregisterGlobalHandlers()
  }

  // Helpers...

  // Handlers...

  handleOpenState = ({ open }) => {
    // this.setState({ open })
    const { id, handleOpenState } = this.props
    if (typeof handleOpenState === 'function') {
      handleOpenState({ id, open })
    }
  }

  onAction = (actionProps) => { // Event handler for ActionContext consumed children
    const { ModalPortal } = this
    if (!ModalPortal) {
      const error = new Error('ModalWindow:onAction: ModalPortal must be defined')
      console.error(error) // eslint-disable-line no-console
      /*DEBUG*/ debugger // eslint-disable-line no-debugger
      throw error // ???
    }
    const actionId = actionProps.id
    const { id, open, actionsContextNode, autoClose, closeOnCancelAction } = this.props
    console.log('ModalWindow:onAction', id, actionId)
    ModalPortal.setResult(actionId)
    if (open && (autoClose || (closeOnCancelAction && actionId === 'cancel'))) { // Close and call `resolveResult` when window is closed
      ModalPortal.close()
    }
    else { // ...Or all `resolveResult` immediatelly
      ModalPortal.resolveResult()
    }
    if (actionsContextNode && typeof actionsContextNode.onAction) {
      actionsContextNode.onAction(actionProps)
    }
  }

  // Provide ModalPortal public methods...

  open = () => this.ModalPortal && this.ModalPortal.open()
  close = () => this.ModalPortal && this.ModalPortal.close()
  toggle = () => this.ModalPortal && this.ModalPortal.toggle()
  isVisible = () => this.ModalPortal && this.ModalPortal.isVisible()

  // Handled in ModalPortal: onKeyPress, *OutsideClick*
  // onKeyPress = (event) => {
  //   const {
  //     id,
  //     onEscPressed,
  //     closeOnEscPressed,
  //     loading,
  //   } = this.props
  //   if (!loading) {
  //     var { keyCode } = event
  //     const isEscPressed = (keyCode === 27)
  //     const cbProps = { event, id, keyCode }
  //     if (isEscPressed) {
  //       if (closeOnEscPressed) {
  //         if (ModalPortal) {
  //           ModalPortal.setResult(selfCloseActionId)
  //           ModalPortal.close()
  //         }
  //         else {
  //           const error = new Error('ModalWindow:onCloseButtonClick: ModalPortal must be defined')
  //           console.error(error) // eslint-disable-line no-console
  //           debugger // eslint-disable-line no-debugger
  //           throw error // ???
  //         }
  //       }
  //       if (typeof onEscPressed === 'function') {
  //         onEscPressed(cbProps)
  //       }
  //     }
  //   }
  // }

  onCloseButtonClick = () => { // Mouse released on wrapper --> close modal
    const { ModalPortal } = this
    if (!ModalPortal) {
      const error = new Error('ModalWindow:onCloseButtonClick: ModalPortal must be defined')
      console.error(error) // eslint-disable-line no-console
      /*DEBUG*/ debugger // eslint-disable-line no-debugger
      throw error // ???
    }
    const { id, closeWithCloseButton, onCloseButtonClick } = this.props
    // console.log('ModalWindow: onCloseButtonClick', id)
    // debugger;
    if (closeWithCloseButton) {
      ModalPortal.setResult(selfCloseActionId)
      ModalPortal.close()
    }
    if (typeof onCloseButtonClick === 'function') {
      onCloseButtonClick({ id })
    }
  }

  // Render helpers...

  // Render...

  renderHeaderIcon() {
    const { icon, iconTheme } = this.props
    const theme = iconTheme || this.props.theme
    const showIcon = icon || theme && config.ui.defaultIcons[theme]
    return showIcon && (
      <div key="HeaderIcon" className={cnModalWindow('HeaderIcon', { theme })}>
        <InlineIcon theme={theme} icon={showIcon} />
      </div>
    )
  }
  renderHeaderTitle() {
    const { title } = this.props
    return title && (
      <div key="HeaderTitle" className={cnModalWindow('HeaderTitle')}>
        {title}
      </div>
    )
  }
  renderHeaderCloseButton() {
    const { showCloseButton } = this.props
    return showCloseButton && (
      <div key="HeaderCloseButton" className={cnModalWindow('HeaderCloseButton')}>
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
      <div className={cnModalWindow('Header', { theme: headerTheme || theme })}>
        {content}
      </div>
    )
  }

  renderLeftContent() {
    const { leftContent } = this.props
    return leftContent && (
      <div className={cnModalWindow('LeftContent')}>
        {leftContent}
      </div>
    )
  }

  renderContent() {
    const { children, contentClassName } = this.props
    // {[> <div className={cnModalWindow('Container')}> <]}
    // {[> </div> <]}
    return children && (
      <div className={cnModalWindow('Content', [ contentClassName ])}>
        {children}
      </div>
    )
  }

  renderActions() {
    const { actions } = this.props
    return actions && (
      <div className={cnModalWindow('Actions')}>
        <ActionsContextProvider value={this}>
          {actions}
        </ActionsContextProvider>
      </div>
    )
  }

  renderWindow = (portalProps) => {
    const { ModalPortal } = portalProps
    // console.log(portalProps)
    // debugger
    if (ModalPortal) { // Save wrapping ModalPortal instance refernce
      this.ModalPortal = ModalPortal // Save ModalPortal handler (TODO)
    }
    // const { width, windowTheme, theme, windowClassName } = this.props
    // <div
    //   className={cnModalWindow('Window', { width, theme: windowTheme || theme }, [windowClassName])}
    //   ref={this.setWindowDomRef}
    // >
    return (
      <React.Fragment>
        {this.renderHeader()}
        <div className={cnModalWindow('Layout')}>
          {this.renderLeftContent()}
          <div className={cnModalWindow('Main')}>
            {this.renderContent()}
            {this.renderActions()}
          </div>
          {/* renderRightContent? */}
        </div>
      </React.Fragment>
    )
  }

  render() {
    // const {
    //   open,
    // } = this.state
    const { // ModalPortal props...
      id,
      className,
      closeOnClickOutside,
      closeOnEscPressed,
      handleLoaderCancel,
      loaderTheme,
      loading,
      onAction,
      onActivate,
      onClickOutside,
      onClose,
      onCloseButtonClick,
      onDeactivate,
      onEscPressed,
      onOpen,
      open,
      theme,
      useLoader,
      windowClassName,
      windowWidth,
      wrapperClassName,
      wrapperTheme,
    } = this.props
    // console.log('ModalWindow:render', this.props.windowWidth)
    // debugger
    // TODO: Other wrapper, window related props?..
    const modalPortalProps = { // Just pass props throught
      id,
      className,
      closeOnClickOutside,
      closeOnEscPressed,
      handleLoaderCancel,
      loaderTheme,
      loading,
      onAction,
      onActivate,
      onClickOutside,
      onClose,
      onCloseButtonClick,
      onDeactivate,
      onEscPressed,
      onOpen,
      open,
      theme,
      useLoader,
      windowClassName,
      windowWidth,
      wrapperClassName,
      wrapperTheme,
      // Renamed props...
      // Pass other props...
      type: 'Window',
    }
    return (
      <ModalPortal {...modalPortalProps}>
        {this.renderWindow}
      </ModalPortal>
    )
  }

}
