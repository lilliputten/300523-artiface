/** @module FormSelect
 *  @class FormSelect
 *  @since 2020.10.28, 22:49
 *  @changed 2020.10.29, 03:14
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'

import FormItemHOC from '../FormItemHOC'

// import FormGroup from 'forms/FormGroup'
// import FormGroup from '../FormGroup'
import Popup from 'elements/Popup'
import Menu from 'elements/Menu'
import FormButton from 'forms/FormButton'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FormSelect.pcss'

const cnFormSelect = cn('FormSelect')

class FormSelect extends React.PureComponent /** @lends @FormSelect.prototype */ {

  static propTypes = {
    id: PropTypes.string,
    // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    checked: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])),
    options: PropTypes.arrayOf(PropTypes.shape({ val: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]), text: PropTypes.string })),
    onChange: PropTypes.func,
    fullWidth: PropTypes.bool,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
  }

  // Lifecycle methods...

  constructor(props) {
    super(props)
    // this.formItemRef = React.createRef()
    this.id = props.id || props.inputId || props.name
    const { checked, value } = props
    this.state = {
      checked: Array.isArray(checked) ? checked : value && [value] || []
    }
  }

  // Helper methods...

  getClassName() {
    const { id } = this
    const classList = cnFormSelect({
      id,
    }, [this.props.className])
    return classList
  }

  getItemsText() {
    const { checked } = this.state
    const { options } = this.props
    const text = Array.isArray(options) && Array.isArray(checked) && options.map(({ val, text }) => {
      if (checked.includes(val)) {
        return text
      }
    }).filter(Boolean).join(', ')
    return text
  }

  // Handlers...

  onControlClick = (params) => {
    const { onControlClick } = this.props
    if (typeof onControlClick === 'function') {
      onControlClick(params)
    }
  }
  onMenuItemClick = (params) => {
    if (typeof this.hideStopper === 'function' && !this.props.closeOnSelect) {
      this.hideStopper()
    }
    const { onMenuItemClick } = this.props
    if (typeof onMenuItemClick === 'function') {
      onMenuItemClick(params)
    }
  }
  onMenuChange = (params) => {
    const { checked } = params
    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange(params)
    }
    this.setState({ checked })
  }

  registerHideStopper = (hideStopper) => { // Called from popup
    this.hideStopper = hideStopper
  }

  // Render...

  renderControlContent() {
    const {
      text,
      placeholder,
      title,
      controlButtonTheme,
      fullWidth,
      disabled,
    } = this.props
    const buttonText = this.getItemsText() || placeholder || text
    return (
      <FormButton
        icon="faChevronDown"
        rightIcon
        theme={controlButtonTheme || 'primary'}
        variation="popupControl"
        rotatedIcon
        text={buttonText}
        title={title}
        fullWidth={fullWidth}
        disabled={disabled}
      />
    )
  }

  renderMenuContent() {
    const {
      singleChoice,
      options,
      checked,
      value,
      disabled,
      // inputId, // ???
    } = this.props
    return (
      <Menu
        checkable={true}
        singleChoice={singleChoice}
        onChange={this.onMenuChange}
        onClick={this.onMenuItemClick}
        checked={checked}
        value={value}
        disabled={disabled}
      >
        {options}
      </Menu>
    )
  }

  render() {

    const {
      id,
      disabled,
      title,
      show,
      fullWidth,
    } = this.props

    const controlContent = this.renderControlContent()
    const menuContent =  this.renderMenuContent()

    const popupProps = {
      id,
      className: this.getClassName(),
      disabled,
      title,
      showPopup: show,
      popupControl: controlContent,
      popupContent: menuContent,
      onControlClick: this.onControlClick,
      registerHideStopper: this.registerHideStopper,
      fullWidth,
    }

    return (
      <Popup {...popupProps} />
    )

  }

}

export default FormItemHOC({ hoverable: true })(FormSelect)
