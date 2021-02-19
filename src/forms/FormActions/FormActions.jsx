/** @module FormActions
 *  @class FormActions
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.19, 16:35
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import FormItemHOC from '../FormItemHOC';
import FormGroup from '../FormGroup';

import {
  ActionsContextProvider,
  withActionsContext,
} from 'helpers/ActionsContext';

import './FormActions.pcss';

const cnFormActions = cn('FormActions');

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

  getClassName() {
    return cnFormActions(null, [this.props.className]);
  }

  onAction = (actionProps) => {
    const {
      onAction,
      actionsContextNode, // ActionsContext Provider
      disabled,
    } = this.props;
    // console.log('FormActions:onAction', {
    //   actionProps,
    //   onAction,
    //   actionsContextNode,
    // });
    // Throw action up...
    if (!disabled) {
      if (actionsContextNode && typeof actionsContextNode.onAction === 'function') {
        actionsContextNode.onAction(actionProps);
      }
      if (typeof onAction === 'function') {
        onAction(actionProps);
      }
    }
  }

  // Render...

  render() {
    return (
      <ActionsContextProvider value={this}>
        <FormGroup {...this.props} className={this.getClassName()} />
      </ActionsContextProvider>
    );
  }

}

export default compose(
  withActionsContext,
  FormItemHOC,
)(FormActions);
// export default FormItemHOC(FormActions);
