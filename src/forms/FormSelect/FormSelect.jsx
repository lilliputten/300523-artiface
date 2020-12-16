/** @module FormSelect
 *  @class FormSelect
 *  @since 2020.10.28, 22:49
 *  @changed 2020.10.29, 03:14
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
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
    onChange: PropTypes.func,
  }

  // Lifecycle methods...

  constructor(props) {
    super(props)
    // this.formItemRef = React.createRef()
    const { value } = this.props
    // this.state = deriveState(defaultState, params, props) // deriveStateFromProps(props, defaultState)
    this.id = props.id || props.inputId || props.name
    this.state = {
      value,
    }
  }

  componentDidMount() {
    // const { formItemRef: { current } = {} } = this
    // this.afterRender()
  }

  /*
   * componentDidUpdate(prevProps, prevState) {
   *   const prevValue = prevProps.value
   *   const propsValue = this.props.value
   *   const stateValue = this.state.value
   *   if (propsValue !== prevValue && propsValue !== stateValue) { // New value from props
   *     this.setState({
   *       value: propsValue,
   *     }, this.updateValueWithState)
   *   }
   *   else if (stateValue !== prevState.value) { // New value from state
   *     this.updateValueWithState(this.state)
   *   }
   *   this.afterRender()
   * }
   */

  // Helper methods...

  getClassName() {
    const { id } = this
    const classList = cnFormSelect({
      id,
    }, [this.props.className])
    return classList
  }

  /*
   * afterRender() { // Calling after each (including first) render
   * }
   */

  updateValueWithState = (state) => {
    const { onChange, disabled } = this.props
    if (!disabled && typeof onChange === 'function') {
      const { value } = state
      onChange({ id: this.id, value })
    }
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
    const { onChange } = this.props
    if (typeof onChange === 'function') {
      onChange(params)
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

  renderControlContent() {
    const {
      text,
      title,
      controlButtonTheme,
    } = this.props

    return (
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
  }

  renderMenuContent() {
    const {
      singleChoice,
    } = this.props

    return (
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
  }

  render() {

    const {
      id,
      // htmlId,
      // name,
      disabled,
      // text,
      // children,
      title,
      show,
      // singleChoice,
      // controlButtonTheme,
    } = this.props

    const controlContent = this.renderControlContent()
    const menuContent =  this.renderMenuContent()

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

export default FormItemHOC({ hoverable: true })(FormSelect)
