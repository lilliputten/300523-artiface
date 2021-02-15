/** @module FormActions
 *  @class FormActions
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.15, 18:03
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import FormItemHOC from '../FormItemHOC';
import FormGroup from '../FormGroup';

import './FormActions.pcss';

const cnFormActions = cn('FormActions');

class FormActions extends React.PureComponent /** @lends @FormActions.prototype */ {

  static propTypes = {
    // align: PropTypes.string,
    // alignItems: PropTypes.string,
    // background: PropTypes.string,
    // className: PropTypes.string,
    // disabled: PropTypes.bool, // ???
    // flow: PropTypes.bool,
    // fullWidth: PropTypes.bool,
    id: PropTypes.string,
    // noSpace: PropTypes.bool,
    // noWrap: PropTypes.bool,
    // padded: PropTypes.bool,
    // stack: PropTypes.bool,
    // wrap: PropTypes.bool,
  }

  static classNameModifiers = [
    // Basic element properties
    'id',
  ]

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getClassName() {
    const mods = FormActions.classNameModifiers.reduce((mods, id) => {
      const val = (this.state[id] != null) ? this.state[id] : this.props[id];
      if (val != null) {
        return { ...mods, [id]: val };
      }
      return mods;
    }, {});
    return cnFormActions(mods, [this.props.className]);
  }

  // Render...

  render() {
    // const {
    //   id,
    //   // name,
    //   // disabled,
    //   // children,
    // } = this.props;

    // const renderProps = this.getRenderProps()

    return (
      <FormGroup {...this.props} className={this.getClassName()} />
    );
  }

}

export default FormItemHOC(FormActions);
