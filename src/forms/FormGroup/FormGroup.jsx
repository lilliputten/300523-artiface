/** @module FormGroup
 *  @class FormGroup
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import FormItemHOC from '../FormItemHOC';

import './FormGroup.pcss';

const cnFormGroup = cn('FormGroup');

class FormGroup extends React.PureComponent /** @lends @FormGroup.prototype */ {

  static propTypes = {
    // content: PropTypes.any, // ???
    align: PropTypes.string,
    alignItems: PropTypes.string,
    background: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool, // ???
    flow: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    noSpace: PropTypes.bool,
    noWrap: PropTypes.bool,
    padded: PropTypes.bool,
    stack: PropTypes.bool,
    wrap: PropTypes.bool,
  }

  static classNameModifiers = [
    // Basic element properties
    'id',
    // Style-related modifiers...
    'align',
    'alignItems',
    'background',
    'flow',
    'fullWidth',
    'noSpace',
    'noWrap',
    'padded',
    'stack',
    'wrap',
    // 'disabled',
  ]

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getClassName() {
    const mods = FormGroup.classNameModifiers.reduce((mods, id) => {
      const val = (this.state[id] != null) ? this.state[id] : this.props[id];
      if (val != null) {
        return { ...mods, [id]: val };
      }
      return mods;
    }, {});
    return cnFormGroup(mods, [this.props.className]);
  }

  // Render...

  render() {
    const {
      id,
      // name,
      // disabled,
      children,
      content,
    } = this.props;

    // const renderProps = this.getRenderProps()

    return (
      <div id={id} className={this.getClassName()}>
        {content || children}
      </div>
    );
  }

}

export default FormItemHOC(FormGroup);
