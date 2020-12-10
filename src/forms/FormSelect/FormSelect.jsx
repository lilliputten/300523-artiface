/** @module FormSelect
 *  @class FormSelect
 *  @since 2020.10.28, 22:49
 *  @changed 2020.10.29, 03:14
 */

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

class FormSelect extends React.Component /** @lends @FormSelect.prototype */ {

  getClassName() {
    // TODO: Refactor properties!
    const {
      id,
    } = this.props
    const classList = cnFormSelect({
      id,
    }, [this.props.className])
    return classList
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
    const { onMenuChange } = this.props
    if (typeof onMenuChange === 'function') {
      onMenuChange(params)
    }
  }

  registerHideStopper = (hideStopper) => { // Called from popup
    this.hideStopper = hideStopper
  }

  // onChange
  // onIemClick
  /* // onClick
   * onClick = (event) => {
   *   const {
   *     disabled,
   *     onClick,
   *     clickable,
   *   } = this.props
   *   if (clickable && !disabled && onClick && typeof onClick === 'function') {
   *     onClick(event)
   *   }
   * }
   */

  // Render...

  render() {

    const {
      id,
      // htmlId,
      // name,
      disabled,
      text,
      // children,
      title,
      show,
      singleChoice,
      controlButtonTheme,
    } = this.props

    const controlContent = (
      <FormButton
        icon="faChevronDown"
        rightIcon
        theme={controlButtonTheme || 'primary'}
        variation="popupControl"
        rotatedIcon
        text={text}
        title={title}
      />
    )

    const menuContent = (
      <Menu
        checkable={true}
        singleChoice={singleChoice}
        onChange={this.onMenuChange}
        onClick={this.onMenuItemClick}
      >
        {[
          { val: 1, text: 'Swimming' },
          { val: 2, text: 'Skiing', checked: true },
        ]}
      </Menu>
    )

    // const renderProps = this.getRenderProps()
    const renderProps = {
      // ...basicRenderProps,
      id,
      className: this.getClassName(),
      disabled,
      title,
      showPopup: show,
      popupControl: controlContent,
      popupContent: menuContent,
      onControlClick: this.onControlClick,
      registerHideStopper: this.registerHideStopper,
      // onControlClick: buttonOnClick,
      // asItem: true
      // onClick: this.onClick, // ???
    }

    return (
      <Popup {...renderProps} />
    )

  }


}

FormSelect.propTypes = {
  id: PropTypes.string,
}
export default FormItemHOC({ hoverable: true })(FormSelect)
