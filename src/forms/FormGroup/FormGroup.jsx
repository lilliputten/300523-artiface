/** @module FormGroup
 *  @class FormGroup
 *  @since 2020.07.20, 19:07
 *  @changed 2021.07.08, 17:09
 */
/* eslint-disable react/require-default-props, react/no-unused-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';

import FormItemHOC from '../FormItemHOC';
import FormSeparator from '../FormSeparator';
import FormContainer from '../FormContainer';

import './FormGroup.pcss';
import './FormGroup-Layout.pcss';
import './FormGroup-Variations.pcss';

const cnFormGroup = cn('FormGroup');

class FormGroup extends React.PureComponent /** @lends @FormGroup.prototype */ {

  // NOTE: Sync props/mods with `FormLabeledGroup.jsx`

  static propTypes = {
    // background: PropTypes.string,
    align: PropTypes.string,
    alignItems: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.element, // ???
    disabled: PropTypes.bool, // ???
    flow: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    // autoSize: PropTypes.bool,
    noSpace: PropTypes.bool,
    noWrap: PropTypes.bool,
    padded: PropTypes.bool,
    separated: PropTypes.bool,
    shaded: PropTypes.bool,
    spaced: PropTypes.bool,
    stack: PropTypes.bool,
    wrap: PropTypes.bool,
    withContainer: PropTypes.bool,
  }

  static classNameModifiers = [ // TODO: Export public interface props list?
    // Basic element properties
    'id',
    // Style-related modifiers...
    'align',
    'alignItems',
    // 'background',
    'flow',
    'fullWidth',
    // 'autoSize',
    'noSpace',
    'noWrap',
    'padded',
    'separated',
    'shaded',
    'spaced',
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
      separated,
      withContainer,
    } = this.props;

    // const renderProps = this.getRenderProps()

    let result = (
      <div id={id} className={this.getClassName()}>
        {separated && (<FormSeparator />)}
        {content || children}
      </div>
    );

    if (withContainer) {
      result = (
        <FormContainer>
          {result}
        </FormContainer>
      );
    }

    return result;
  }

}

export default FormItemHOC(FormGroup);
