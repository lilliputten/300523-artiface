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

  // Event handlers...

  handleChange = (event) => {
    const { id, onChange, disabled, numericValue } = this.props
    if (!disabled && typeof onChange === 'function') {
      const { target } = event
      let { value } = target
      if (numericValue && !isNaN(value)) {
        value = Number(value)
      }
      onChange({ event, id, target, value })
    }
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
      id,
      inputId,
      name,
      value,
      defaultValue,
      disabled,
      onChange,
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
      // value: value,
      // defaultValue: defaultValue,
      // onChange: this.handleChange,
      placeholder: placeholder,
      ref: (domElem) => { this.inputDomElem = domElem },
      // onFocus: this.onFocusIn,
      // onBlur: this.onFocusOut,
    }
    if (onChange && typeof onChange === 'function') {
      inputProps.onChange = this.handleChange
      inputProps.value = value
    }
    else {
      inputProps.defaultValue = (defaultValue != null) ? defaultValue : value
    }
    return (
      <input
        {...inputProps}
      />
    )
  }

  renderIcon() {
    const {
      icon,
      iconTitle,
      onIconClick,
    } = this.props

    return icon && (
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
        icon={icon}
        className={cnFormTextInput('Icon', { clickable: !!onIconClick })}
        onClick={onIconClick}
        title={iconTitle}
      />
    )
  }

  render() {

    const {
      id,
      inputId,
      name,
      value,
      defaultValue,
      disabled,
      placeholder,
      type = 'text',
      icon,
      iconTitle,
      onIconClick,
      setDomRef,
    } = this.props

    const inputElem = this.renderInput()
    const iconElem = icon && (
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
        icon={icon}
        className={cnFormTextInput('Icon', { clickable: !!onIconClick })}
        onClick={onIconClick}
        title={iconTitle}
      />
    )

    const renderProps = {
      // ...basicRenderProps,
      id,
      className: this.getClassName(),
      disabled,
      // title,
      type,
      onClick: this.onClick,
      ref: setDomRef,
    }


    return (
      <div {...renderProps}>
        {inputElem}
        {iconElem}
      </div>
    )

  }

  /*
   * render() {
   *   const {
   *     id,
   *     name,
   *     disabled,
   *     htmlFor,
   *     text,
   *     children,
   *     title,
   *   } = this.props
   *   // const renderProps = this.getRenderProps()
   *   const renderProps = {
   *     // ...basicRenderProps,
   *     id,
   *     className: this.getClassName(),
   *     disabled,
   *     title,
   *     // onClick: this.onClick, // ???
   *   }
   *   return (
   *     <div {...renderProps}>
   *       <label
   *         className="FormTextInput-Control"
   *         id={id}
   *         name={name}
   *         disabled={disabled}
   *         htmlFor={htmlFor}
   *         title={title}
   *       >
   *         {text || title || children}
   *       </label>
   *     </div>
   *   )
   * }
   */

}

FormTextInput.propTypes = {
  id: PropTypes.string,
}
export default FormItemHOC({ hoverable: true, framed: true })(FormTextInput)
