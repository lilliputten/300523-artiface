/** @module FormActions
 *  @class FormActions
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.19, 17:51
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import FormItemHOC from '../FormItemHOC';
import FormGroup from '../FormGroup';
import FormButton from '../FormButton';

import {
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
    id: PropTypes.string,
    // See props definitions for FormGroup
  }

  // static classNameModifiers = [
  //   // Basic element properties
  //   // 'id',
  // ]

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // getClassName() {
  //   return cnFormActions(null, [this.props.className]);
  // }

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
      if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {
        actionsContextNode.onAction(actionProps);
      }
      if (typeof onAction === 'function') {
        onAction(actionProps);
      }
    }
  }

  // Render...

  renderActionItem(data, n) {
    // console.log('FormActions:renderActionItem', {
    //   data,
    // });
    if (React.isValidElement(data)) {
      return data;
    }
    if (typeof data !== 'object') {
      data = { text: String(data) };
    }
    const id = data.id || String(n);
    const element = (
      <FormButton key={id} id={id} {...defaultActionButtonProps} {...data} />
    );
    return element;
  }

  render() {
    const { actions, children, className, ...restProps } = this.props;
    let content = actions || children;
    // console.log('FormActions:render', {
    //   content,
    // });
    if (Array.isArray(content)) {
      content = content.map(this.renderActionItem, this);
    }
    return (
      <ActionsContextProvider value={this}>
        <FormGroup {...restProps} className={cnFormActions(null, [className])}>
          {content}
        </FormGroup>
      </ActionsContextProvider>
    );
  }

}

export default compose(
  withActionsContext,
  FormItemHOC,
)(FormActions);
// export default FormItemHOC(FormActions);
