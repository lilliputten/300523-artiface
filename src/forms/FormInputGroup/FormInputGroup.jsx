/** @module FormInputGroup
 *  @class FormInputGroup
 *  @since 2020.10.21, 23:43
 *  @changed 2020.10.21, 23:43
 */
/* eslint-disable react/require-default-props */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'

import FormItemHOC from '../FormItemHOC'
import FormGroup from '../FormGroup'

import './FormInputGroup.pcss'

const classNameModifiers = [
  // Basic element properties
  'id',
  // Style-related modifiers...
  // 'align',
  // 'padded',
  // 'background',
  // 'flow',
  // 'fullWidth',
]

const cnFormInputGroup = cn('FormInputGroup')

class FormInputGroup extends React.PureComponent /** @lends @FormInputGroup.prototype */ {

  static propTypes = {
    id: PropTypes.string,
    // disabled: PropTypes.bool, // ???
    // align: PropTypes.string,
    // padded: PropTypes.bool,
    // flow: PropTypes.bool,
  }

  getClassName() {
    const mods = classNameModifiers.reduce((mods, id) => {
      const val = this.props[id]
      if (val != null) {
        return { ...mods, [id]: val }
      }
      return mods
    }, {})
    return cnFormInputGroup(mods, [this.props.className])
  }

  // Render...

  render() {
    return (
      <FormGroup {...this.props} className={this.getClassName()} />
    )
  }

}

export default FormItemHOC(FormInputGroup)
