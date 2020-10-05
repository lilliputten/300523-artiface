/** @module FormGroup
 *  @class FormGroup
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import FormItemHOC from '../FormItemHOC'

import './FormGroup.pcss'

const classNameModifiers = [
  // Basic element properties
  'id',
  // Style-related modifiers...
  'align',
  'padded',
  'background',
  'flow',
]

const cnFormGroup = cn('FormGroup')

class FormGroup extends React.Component /** @lends @FormGroup.prototype */ {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  getClassName() {

    const mods = classNameModifiers.reduce((mods, id) => {
      const val = (this.state[id] != null) ? this.state[id] : this.props[id]
      if (val != null) {
        return { ...mods, [id]: val }
      }
      return mods
    }, {})

    return cnFormGroup(mods, [this.props.className])
  }

  // Render...

  render() {
    const {
      id,
      // name,
      // disabled,
      children,
      content,
    } = this.props

    // const renderProps = this.getRenderProps()

    return (
      <div id={id} className={this.getClassName()}>
        {content || children}
      </div>
    )
  }

}

FormGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  flow: PropTypes.bool,
  value: PropTypes.any,
  valueType: PropTypes.string,
  onChange: PropTypes.func,
}
export default FormItemHOC(FormGroup)
