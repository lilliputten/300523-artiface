/** @module FormTextInput
 *  @class FormTextInput
 *  @since 2020.10.07, 00:20
 *  @changed 2020.10.07, 00:20
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
    this.state = {
      value: this.props.value,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value
    const propsValue = this.props.value
    const stateValue = this.state.value
    // console.log(prevValue, propsValue, stateValue, prevState.value)
    // debugger
    if (prevValue !== propsValue && propsValue !== stateValue) {
      this.setState({
        value: propsValue,
      }, this.updateValue)
      return true
    }
    else if (prevState.value !== stateValue) {
      this.updateValue(this.state)
      return true
    }
  }

  // Helper methods...

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
    // TODO: Refactor properties!
    const {
      value,
    } = this.state
    const {
      id,
      hasClear,
    } = this.props

    const hasValue = value != null && value !== ''
    const hasClearActive = hasClear && hasValue

    const classList = cnFormTextInput({
      id,
      hasClear: hasClearActive,
    }, [this.props.className])
    return classList
    // const mods = classNameModifiers.reduce((mods, id) => {
    //   const val = [> (this.state[id] != null) ? this.state[id] : <] this.props[id]
    //   if (val != null) {
    //     return { ...mods, [id]: val }
    //   }
    //   return mods
    // }, {})
    // return cnFormTextInput(mods, [this.props.className])
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
    // if (onChange && typeof onChange === 'function') {
    //   inputProps.onChange = this.handleChange
    //   inputProps.value = value
    // }
    // else {
    //   inputProps.defaultValue = value
    // }
    return (
      <input
        {...inputProps}
      />
    )
  }

  renderClearIcon() { // DELETE
    const {
      clearIcon,
      clearIconTitle,
      // onClearClick,
    } = this.props

    return (
      /*
       * <span
       *   key="Icon"
       *   className={cnFormTextInput('Icon', { clickable: !!onIconClick })}
       *   onClick={onIconClick}
       *   title={iconTitle}
       * >
       *   <FontAwesomeIcon className={cnFormTextInput('IconImg')} icon={icon} />
       * </span>
       */
      <InlineIcon
        icon={clearIcon || 'faTimes'}
        className={cnFormTextInput('ClearIcon')}
        onClick={this.onClearClick}
        title={clearIconTitle || 'Clear content'}
      />
    )
  }

  render() {

    const {
      value,
    } = this.state
    const {
      id,
      disabled,
      type = 'text',
      title,
      setDomRef, // For FormItem interactive dom access
      hasClear,
    } = this.props

    const inputElem = this.renderInput()

    const hasValue = value != null && value !== ''
    const hasClearActive = hasClear && hasValue

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
        {hasClearActive && this.renderClearIcon()}
      </div>
    )

  }

}

FormTextInput.propTypes = {
  id: PropTypes.string,
}
export default FormItemHOC({ hoverable: true, framed: true })(FormTextInput)
