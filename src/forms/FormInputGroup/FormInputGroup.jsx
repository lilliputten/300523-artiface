/** @module FormInputGroup
 *  @class FormInputGroup
 *  @since 2020.10.21, 23:43
 *  @changed 2020.10.21, 23:43
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import FormItemHOC from '../FormItemHOC'
import FormGroup from '../FormGroup'

import './FormInputGroup.pcss'

const classNameModifiers = [
  // Basic element properties
  'id',
  // Style-related modifiers...
  'align',
  'padded',
  'background',
  'flow',
  // 'fullWidth',
]

const cnFormInputGroup = cn('FormInputGroup')

class FormInputGroup extends React.Component /** @lends @FormInputGroup.prototype */ {

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
    // const {
    //   id,
    //   // name,
    //   // disabled,
    //   children,
    //   content,
    // } = this.props
    return (
      <FormGroup {...this.props} className={this.getClassName()} />
    )
  }

}

FormInputGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  flow: PropTypes.bool,
  value: PropTypes.any,
  valueType: PropTypes.string,
  onChange: PropTypes.func,
}
export default FormItemHOC(FormInputGroup)
