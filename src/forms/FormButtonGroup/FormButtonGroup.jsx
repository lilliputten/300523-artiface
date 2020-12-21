/** @module FormButtonGroup
 *  @class FormButtonGroup
 *  @since 2020.10.21, 23:43
 *  @changed 2020.10.21, 23:43
 */
/* eslint-disable react/require-default-props */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure'

import FormItemHOC from '../FormItemHOC'
import FormGroup from '../FormGroup'

import './FormButtonGroup.pcss'

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

const cnFormButtonGroup = cn('FormButtonGroup')

class FormButtonGroup extends React.PureComponent /** @lends @FormButtonGroup.prototype */ {

  static propTypes = {
    id: PropTypes.string,
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
    return cnFormButtonGroup(mods, [this.props.className])
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

export default FormItemHOC(FormButtonGroup)
