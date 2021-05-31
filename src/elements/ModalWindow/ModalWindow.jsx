/** @module ModalWindow
 *  @class ModalWindow
 *  @since 2020.12.21, 22:58
 *  @changed 2021.05.17, 15:33
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 *
 *  TODO 2020.12.29, 21:51 -- Use level mod (increase margins)
 */
/* --eslint-disable no-console */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';
import config from 'config';

import ModalPortal, { passModalPortalProps } from 'elements/ModalPortal';

// import { Provider } from 'react-redux';
// import { app as appConfig } from 'config';

import InlineIcon from 'elements/InlineIcon';
import FormButton from 'forms/FormButton';
import FormActions from 'forms/FormActions';

import { ActionsContextProvider } from 'helpers/ActionsContext';

import './ModalWindow-Geometry.pcss';
import './ModalWindow-Themes.pcss';
import './ModalWindow-Errors.pcss';
// import './ModalWindow-Transitions.pcss'

const cnModalWindow = cn('ModalWindow');

// const doDebug = [>DEBUG<] false && config.build.DEV_DEBUG || // DEBUG!
//   false

export const selfCloseActionId = 'modalSelfClose';
export const externalCloseActionId = 'modalExternalClose';

class ModalWindow extends React.PureComponent /** @lends @ModalWindow.prototype */ {

  // Props...

  static propTypes = {
    // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalNodeRef: PropTypes.func, // ??? Demo?
    actions: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]), // Actions component(s) (TODO: `ActionsContext` must be used)
    className: PropTypes.string, // ModalWindow class name
    closeOnCancelAction: PropTypes.bool, // Auto-close on `cancel` action event
    closeOnClickOutside: PropTypes.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
    closeOnEscPressed: PropTypes.bool, // Close (cancel) modal on esc key pressed
    closeWithCloseButton: PropTypes.bool, // Close (cancel) modal by click on header 'Close' button
    contentClassName: PropTypes.string, // Content element class name
    error: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ]), // Error(s) strings to display above content
    handleLoaderCancel: PropTypes.func, // Loader onCancel event handler
    handleOpenState: PropTypes.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
    headerTheme: PropTypes.string, // Header theme (using `theme` if not specified)
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Show icon in header
    iconTheme: PropTypes.string, // Icon theme (using `theme` if not specified)
    id: PropTypes.string, // ModalWindow id
    leftContent: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Content at left of main content and actions (ideal place for large visual icon)
    loaderTheme: PropTypes.string, // Loader theme ('MediumDark' is default)
    loading: PropTypes.bool, // Show Loader flashback
    onAction: PropTypes.func, // Event fired on action invoked (see `actions` prop)
    onActivate: PropTypes.func, // Event fired on activate (before open)
    onClickOutside: PropTypes.func, // Event fired on click outside modal
    onClose: PropTypes.func, // Event fired on modal close
    onCloseButtonClick: PropTypes.func, // Event fired on header 'Close' button click
    onDeactivate: PropTypes.func, // Event fired on deactivate (unmounting from dom)
    onEscPressed: PropTypes.func, // Event fired on esc key pressed
    onOpen: PropTypes.func, // Event fired on modal open
    open: PropTypes.bool, // Show modal by default
    showCloseButton: PropTypes.bool, // Display close button in header
    theme: PropTypes.string, // ModalWindow theme (default theme for all other themed elements, see `*Theme`)
    title: PropTypes.string, // ModalWindow title
    useLoader: PropTypes.bool,
    width: PropTypes.string, // ModalWindow window width (predefined variants: xs, sm, md, lg, xl, xxl)
    windowClassName: PropTypes.string, // ModalWindow window class name
    windowTheme: PropTypes.string, // Window theme (using `theme` if not specified)
    wrapperClassName: PropTypes.string, // ModalWindow wrapper class name
    wrapperTheme: PropTypes.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
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
    wrapperTheme: 'MediumDark',
  }

  // Properties...

  // From ModalPortal:
  ModalPortal = null

  // Lifecycle...

  componentDidUpdate(prevProps, prevState) {
    const node = this;
    const { props, state } = this;
    const { onComponentDidUpdate } = this.props;
    if (typeof onComponentDidUpdate === 'function') {
      onComponentDidUpdate({ node, props, state, prevProps, prevState });
    }
  }

  // Helpers...

  // Handlers...

  handleOpenState = ({ open }) => {
    // this.setState({ open })
    const { id, handleOpenState } = this.props;
    if (typeof handleOpenState === 'function') {
      handleOpenState({ id, open });
    }
  }

  onAction = (actionProps) => { // Event handler for ActionContext consumed children
    const { ModalPortal } = this;
    if (!ModalPortal) {
      const error = new Error('ModalWindow:onAction: ModalPortal must be defined');
      console.error(error); // eslint-disable-line no-console
      /*DEBUG*/ debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    const actionId = actionProps.id;
    const { open, actionsContextNode, autoClose, closeOnCancelAction } = this.props;
    // console.log('ModalWindow:onAction', this.props.id, actionId);
    ModalPortal.setResult(actionId);
    if (open && (autoClose || (closeOnCancelAction && actionId === 'cancel'))) { // Close and call `resolveResult` when window is closed
      ModalPortal.close();
    }
    else { // ...Or all `resolveResult` immediatelly
      ModalPortal.resolveResult();
    }
    if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {
      actionsContextNode.onAction(actionProps);
    }
  }

  onCloseButtonClick = () => { // Mouse released on wrapper --> close modal
    const { ModalPortal } = this;
    if (!ModalPortal) {
      const error = new Error('ModalWindow:onCloseButtonClick: ModalPortal must be defined');
      console.error(error); // eslint-disable-line no-console
      /*DEBUG*/ debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    const { id, closeWithCloseButton, onCloseButtonClick } = this.props;
    // console.log('ModalWindow: onCloseButtonClick', id)
    // debugger;
    if (closeWithCloseButton) {
      ModalPortal.setResult(selfCloseActionId);
      ModalPortal.close();
    }
    if (typeof onCloseButtonClick === 'function') {
      onCloseButtonClick({ id });
    }
  }

  setPortalNode = (node) => { // Save reference to ModalPortal node
    this.ModalPortal = node;
  }

  // Provide ModalPortal public methods...

  open = () => this.ModalPortal && this.ModalPortal.open()
  close = () => this.ModalPortal && this.ModalPortal.close()
  toggle = (open) => this.ModalPortal && this.ModalPortal.toggle(open)
  isVisible = () => this.ModalPortal && this.ModalPortal.isVisible()

  // Render helpers...

  // Render...

  renderHeaderIcon() {
    const { icon, iconTheme } = this.props;
    const theme = iconTheme || this.props.theme;
    const showIcon = icon || theme && config.ui.defaultIcons[theme];
    return showIcon && (
      <div key="HeaderIcon" className={cnModalWindow('HeaderIcon', { theme })}>
        <InlineIcon theme={theme} icon={showIcon} />
      </div>
    );
  }
  renderHeaderTitle() {
    const { title } = this.props;
    return title && (
      <div key="HeaderTitle" className={cnModalWindow('HeaderTitle')}>
        {title}
      </div>
    );
  }
  renderHeaderCloseButton() {
    const { showCloseButton } = this.props;
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
    );
  }

  renderHeader() {
    const { headerTheme, theme } = this.props;
    const content = [
      this.renderHeaderIcon(),
      this.renderHeaderTitle(),
      this.renderHeaderCloseButton(),
    ].filter(Boolean);
    const hasHeader = !!(content && content.length);
    return hasHeader && (
      <div className={cnModalWindow('Header', { theme: headerTheme || theme })}>
        {content}
      </div>
    );
  }

  renderLeftContent() {
    const { leftContent } = this.props;
    return leftContent && (
      <div className={cnModalWindow('LeftContent')}>
        {leftContent}
      </div>
    );
  }

  renderContentError = (error) => {
    if (Array.isArray(error)) {
      return error
        .map(this.renderContentError)
        .filter(x => x)
        .map((str, n) => {
          const key = 'error' + n;
          return <div key={key} className={cnModalWindow('ErrorItem')}>{str}</div>;
        });
    }
    if (!error) {
      return null;
    }
    if (error instanceof Error) {
      return String(error).replace(/^Error:\s*/, '');
    }
    if (typeof error !== 'string') {
      return String(error);
    }
    return error;
  }

  renderContent() {
    const {
      children,
      contentClassName,
      error,
    } = this.props;
    // console.log('ModalWindow:renderContent', children)
    // debugger
    const errorContent = error && (<div className={cnModalWindow('Error')}>{this.renderContentError(error)}</div>);
    return children && (
      <div className={cnModalWindow('Content', [ contentClassName ])}>
        {errorContent}
        {children}
      </div>
    );
  }

  renderActions() {
    const { actions } = this.props;
    // Allow to treat actions as ids/texts/ list see `FromActions`.
    return actions && (
      <ActionsContextProvider value={this}>
        <FormActions className={cnModalWindow('Actions')}>
          {actions}
        </FormActions>
      </ActionsContextProvider>
    );
  }

  renderWindow = (/* portalProps */) => {
    // const { ModalPortal } = portalProps || {} // !!!
    // this.ModalPortal = ModalPortal // Save ModalPortal handler
    // console.log('ModalWindow:renderWindow', this.props.children)
    let content = (
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
    );
    // // XXX: Wrap with redux provider?
    // const { store } = appConfig; // TODO: Move to `ModalPortal`?
    // if (store) {
    //   content = <Provider store={store}>{content}</Provider>;
    // }
    return content;
  }

  render() {
    // Add all custom handler props ('on*')...
    const handlerKeys = Object.keys(this.props)
      .filter(id => id.startsWith('on') && !passModalPortalProps.includes(id))
    ;
    const portalProps = passModalPortalProps.concat(handlerKeys).reduce((data, id) => {
      return { ...data, [id]: this.props[id] };
    }, {});
    Object.keys(this.props)
      .filter(id => id.startsWith('on'))
      .forEach(id => {
        portalProps[id] = this.props[id];
      })
    ;
    Object.assign(portalProps, {
      handleOpenState: this.handleOpenState,
      // onActivate: this.onActivate,
      // onDeactivate: this.onDeactivate,
      // wrapperTheme: 'SubtleDark',
    });
    // console.log('ModalWindow:render', this.props.children)
    // NOTE: Use arrow function to force update modal content
    return (
      <ModalPortal {...portalProps} type="Window" setPortalNode={this.setPortalNode}>
        {this.renderWindow()}
      </ModalPortal>
    );
  }

}

export default ModalWindow;
