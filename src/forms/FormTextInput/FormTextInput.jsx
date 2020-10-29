/** @module FormTextInput
 *  @class FormTextInput
 *  @since 2020.10.07, 00:20
 *  @changed 2020.10.29, 23:44
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import InlineIcon from 'elements/InlineIcon'
import FormItemHOC from '../FormItemHOC'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FormTextInput.pcss'

const cnFormTextInput = cn('FormTextInput')

class FormTextInput extends React.Component /** @lends @FormTextInput.prototype */ {


  // Lifecycle...

  constructor(props) {
    super(props)
    const { value = '' } = this.props
    this.state = {
      value,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value
    const propsValue = this.props.value
    const stateValue = this.state.value
    if (prevValue !== propsValue && propsValue !== stateValue) {
      this.setState({
        value: propsValue,
      }, this.updateValue)
    }
    else if (prevState.value !== stateValue) {
      this.updateValue(this.state)
    }
  }

  // Helper methods...

  hasValue() {
    const {
      value,
    } = this.state
    return value != null && value !== ''
  }

  hasIcon() {
    const {
      icon,
      hasIcon,
      hasClear,
    } = this.props
    return hasIcon || !!icon || (hasClear && this.hasValue())
  }

  updateValue = (state) => {
    const { id, onChange, disabled, numericValue } = this.props
    if (!disabled && typeof onChange === 'function') {
      const { target } = event
      let { value } = state
      if (numericValue && !isNaN(value)) {
        value = Number(value)
      }
      onChange({ event, id, target, value })
    }
  }

  getClassName() {
    const {
      id,
      hasClear,
    } = this.props
    const hasValue = this.hasValue()
    const hasClearActive = hasClear && hasValue
    const classList = cnFormTextInput({
      id,
      hasIcon: this.hasIcon(),
      hasValue: this.hasValue(),
      hasClear,
      hasClearActive,
    }, [this.props.className])
    return classList
  }

  // Event handlers...

  handleChange = (event) => {
    const { target } = event
    const { value } = target
    this.setState({ value })
  }

  onClearClick = () => {
    this.setState({ value: '' })
  }

  onKeyPress = (event) => {
    var { keyCode } = event
    const {
      id,
      onKeyPress,
      onEnterPressed,
      // onEscPressed,
    } = this.props
    const cbProps = { event, id, keyCode }
    onKeyPress && onKeyPress(cbProps)
    onEnterPressed && (keyCode === 13) && onEnterPressed(cbProps) // Enter?
    // onEscPressed && (keyCode === 27) && onEscPressed(cbProps) // Esc? Seems to not processing (in chrome at least)
  }

  onFocusIn = () => {
    this.mounted && this.setState({ focused: true })
    window.addEventListener('keypress', this.onKeyPress)
    if (typeof this.props.onFocusIn === 'function') { // Propogate event if handler passed
      this.props.onFocusIn(event)
    }
  }
  onFocusOut = (event) => {
    this.mounted && this.setState({ focused: false })
    window.removeEventListener('keypress', this.onKeyPress)
    if (typeof this.props.onFocusOut === 'function') { // Propogate event if handler passed
      this.props.onFocusOut(event)
    }
  }

  // Render...

  renderInput() {
    const {
      value,
    } = this.state
    const {
      id,
      inputId,
      name,
      disabled,
      // onChange,
      placeholder,
      type = 'text',
    } = this.props

    const inputProps = {
      key: 'Input',
      type,
      className: cnFormTextInput('Control'),
      id: inputId || id || name,
      name: name || inputId || id,
      disabled: disabled,
      placeholder: placeholder,
      ref: (domElem) => { this.inputDomElem = domElem },
      onChange: this.handleChange,
      value,
      // onFocus: this.onFocusIn,
      // onBlur: this.onFocusOut,
    }
    return (
      <input
        {...inputProps}
      />
    )
  }

  renderClearIcon() { // DELETE
    const {
      hasClear,
      clearIcon,
      clearIconTitle,
      // onClearClick,
    } = this.props
    const hasValue = this.hasValue()
    const hasClearActive = hasClear && hasValue
    return hasClearActive && (
      <InlineIcon
        icon={clearIcon || 'faTimes'}
        className={cnFormTextInput('Icon', { mode: 'Clear' })}
        onClick={this.onClearClick}
        title={clearIconTitle || 'Clear content'}
      />
    )
  }

  renderIcon() { // DELETE
    const {
      // hasIcon,
      icon,
      iconTitle,
      onIconClick,
    } = this.props

    return icon && (
      <InlineIcon
        icon={icon}
        className={cnFormTextInput('Icon')}
        onClick={onIconClick}
        title={iconTitle}
      />
    )
  }

  render() {

    const {
      id,
      disabled,
      type = 'text',
      title,
      setDomRef, // For FormItem interactive dom access
    } = this.props

    const inputElem = this.renderInput()

    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      title,
      type,
      onClick: this.onClick,
      ref: setDomRef,
    }

    return (
      <div {...renderProps}>
        {inputElem}
        {this.renderIcon() || this.renderClearIcon()}
      </div>
    )

  }

}

FormTextInput.propTypes = {
  id: PropTypes.string,
}
export default FormItemHOC({ hoverable: true, framed: true })(FormTextInput)
