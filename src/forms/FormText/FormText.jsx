/** @module FormText
 *  @class FormText
 *  @since 2020.10.29, 21:25
 *  @changed 2020.10.29, 22:42
 */
/* eslint-disable react/require-default-props */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'

import FormItemHOC from '../FormItemHOC'

import './FormText.pcss'

const cnFormText = cn('FormText')

class FormText extends React.PureComponent /** @lends @FormText.prototype */ {

  static propTypes = {
    id: PropTypes.string,
  }

  getClassName() {
    const {
      id,
    } = this.props
    const classList = cnFormText({
      id,
    }, [this.props.className])
    return classList
  }

  // Handlers...

  onClick = (event) => {
    const {
      disabled,
      onClick,
    } = this.props
    if (!disabled && onClick && typeof onClick === 'function') {
      onClick(event)
    }
  }

  // Render...

  render() {

    const {
      id,
      disabled,
      text,
      children,
      title,
    } = this.props

    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      title,
    }

    return (
      <div {...renderProps}>
        {children || text || title}
      </div>
    )

  }

}

export default FormItemHOC({ hoverable: true })(FormText)
