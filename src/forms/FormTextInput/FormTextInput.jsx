/** @module FormTextInput
 *  @class FormTextInput
 *  @since 2020.10.07, 00:20
 *  @changed 2020.10.07, 00:20
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import FormItemHOC from '../FormItemHOC'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FormTextInput.pcss'

const cnFormTextInput = cn('FormTextInput')

class FormTextInput extends React.Component /** @lends @FormTextInput.prototype */ {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }

  getClassName() {
    // TODO: Refactor properties!
    const {
      id,
    } = this.props
    const classList = cnFormTextInput({
      id,
    }, [this.props.className])
    return classList
  }

  // Handlers...

  onClick = (event) => {
    const {
      disabled,
      onClick,
      clickable,
    } = this.props
    if (clickable && !disabled && onClick && typeof onClick === 'function') {
      onClick(event)
    }
  }

  // Render...

  render() {

    const {
      id,
      name,
      disabled,
      htmlFor,
      text,
      children,
      title,
    } = this.props

    // const renderProps = this.getRenderProps()
    const renderProps = {
      // ...basicRenderProps,
      id,
      className: this.getClassName(),
      disabled,
      title,
      // onClick: this.onClick, // ???
    }

    return (
      <div {...renderProps}>
        <label
          className="FormTextInput-Control"
          id={id}
          name={name}
          disabled={disabled}
          htmlFor={htmlFor}
          title={title}
        >
          {text || title || children}
        </label>
      </div>
    )

  }


}

FormTextInput.propTypes = {
  id: PropTypes.string,
}
export default FormItemHOC({ hoverable: true })(FormTextInput)
