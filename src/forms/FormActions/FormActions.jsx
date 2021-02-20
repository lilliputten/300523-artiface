/** @module FormActions
 *  @class FormActions
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.20, 16:43
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import Menu from 'elements/Menu';

import FormItemHOC from '../FormItemHOC';
import FormGroup from '../FormGroup';
import FormButton from '../FormButton';
import FormSeparator from '../FormSeparator';
import ModalPopup from 'elements/ModalPopup';

import { // ActionsContext...
  ActionsContextProvider,
  withActionsContext,
} from 'helpers/ActionsContext';

import './FormActions.pcss';

const cnFormActions = cn('FormActions');

const defaultActionButtonProps = {
  theme: 'default',
};

class FormActions extends React.PureComponent /** @lends @FormActions.prototype */ {

  static propTypes = {
    // children,
    actions: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    actionsContextNode: PropTypes.element, // ActionsContext Provider
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    // layout: PropTypes.string,
    menu: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    menuButtonTheme: PropTypes.string,
    onAction: PropTypes.func,
    withMenu: PropTypes.bool,
    setPopupNodeRef: PropTypes.func,
    // See props definitions for FormGroup
  }

  // Handlers...

  onAction = (actionProps) => {
    const {
      id,
      onAction,
      actionsContextNode, // ActionsContext Provider
      disabled,
    } = this.props;
    // Throw action up...
    if (!disabled) {
      if (id) {
        actionProps = { ...actionProps, actionsId: id };
      }
      // console.log('FormActions:onAction', {
      //   actionProps,
      //   onAction,
      //   actionsContextNode,
      // });
      // debugger;
      if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {
        actionsContextNode.onAction(actionProps);
      }
      if (typeof onAction === 'function') {
        onAction(actionProps);
      }
    }
  }

  onMenuAction = (actionProps) => {
    const { popupNode } = this;
    const { disabled } = this.props;
    if (!disabled) {
      // console.log('FormActions:onMenuAction', { actionProps, popupNode });
      // debugger;
      this.onAction(actionProps);
      if (/* closeMenuOnAction && */ popupNode) {
        popupNode.close();
      }
    }
  }

  setPopupNodeRef = (node) => {
    const { setPopupNodeRef } = this.props;
    this.popupNode = node;
    if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
      setPopupNodeRef(node);
    }
  }

  // Render...

  getClassName() {
    const {
      withMenu,
      className,
    } = this.props;
    const mods = {
      withMenu,
    };
    return cnFormActions(mods, [className]);
  }

  renderActionItem(data, n) {
    if (React.isValidElement(data)) {
      return data;
    }
    if (typeof data !== 'object') {
      data = { text: String(data) };
    }
    else if (data.id === 'separator') {
      return (<FormSeparator key={'separator' + n} />);
    }
    const id = data.id || 'item' + n;
    const element = (
      <FormButton
        key={id}
        id={id}
        text={id} // Default text: would be overrided from `data` if exists
        {...defaultActionButtonProps}
        {...data}
      />
    );
    return element;
  }

  renderMenu() {
    const {
      withMenu,
      menu,
      menuButtonTheme = 'plain',
    } = this.props;
    if (!withMenu || !menu) {
      return null;
    }
    let menuElement;
    const menuProps = {
      // onClick: this.onMenuItemClick,
      onAction: this.onMenuAction,
    };
    if (React.isValidElement(menu)) {
      menuElement = React.cloneElement(menu, menuProps);
    }
    else {
      menuElement = (
        <ActionsContextProvider value={this}>
          <Menu {...menuProps}>
            {menu}
          </Menu>
        </ActionsContextProvider>
      );
    }
    const popupControl = (
      <FormButton
        key="popupControl"
        id="popupControl"
        icon="faBars"
        theme={menuButtonTheme}
      />
    );
    const menuPopup = (
      <ModalPopup
        key="menuPopup"
        id="menuPopup"
        popupControl={popupControl}
        popupContent={menuElement}
        ref={this.setPopupNodeRef}
      />
    );
    return (
      <FormGroup
        key="FormActionsMenu"
        id="FormActionsMenu"
        className={cnFormActions('Menu')}
        align="right"
        flow
      >
        {menuPopup}
      </FormGroup>
    );
  }

  render() {
    const {
      actions,
      children,
      // Omit own props (do not pass to FormGroup)...
      /* eslint-disable no-unused-vars */
      className,
      withMenu,
      menu,
      setPopupNodeRef,
      // theme,
      // layout,
      /* eslint-enable no-unused-vars */
      ...restProps
    } = this.props;
    let content = actions || children;
    if (Array.isArray(content)) {
      content = content.map(this.renderActionItem, this);
    }
    return (
      <FormGroup {...restProps} className={this.getClassName()}>
        <ActionsContextProvider value={this}>
          {content}
        </ActionsContextProvider>
        {this.renderMenu()}
      </FormGroup>
    );
  }

}

export default compose(
  withActionsContext,
  FormItemHOC,
)(FormActions);
// export default FormItemHOC(FormActions);
