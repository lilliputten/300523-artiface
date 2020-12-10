/** @module FormRadio
 *  @class FormRadio
 *  @since 2020.04.02, 14:53
 *  @changed 2020.04.02, 14:53
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth */

import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'utils'

// import FormItem from '../FormItem'
import FormItemHOC from '../FormItemHOC'

import './FormRadio.pcss'

const cnFormRadio = cn('FormRadio')

class FormRadio extends React.PureComponent /** @lends @FormRadio.prototype */ {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: false,
  }

  constructor(props) {
    super(props)
    // this.formItemRef = React.createRef()
    const { value } = this.props
    this.state = {
      value,
    }
  }

  componentDidMount() {
    // const { formItemRef: { current } = {} } = this
    this.afterRender()
  }

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value
    const propsValue = this.props.value
    const stateValue = this.state.value
    if (propsValue !== prevValue && propsValue !== stateValue) { // New value from props
      this.setState({
        value: propsValue,
      }, this.updateValueWithState)
    }
    else if (stateValue !== prevState.value) { // New value from state
      this.updateValueWithState(this.state)
    }
    this.afterRender()
    return true
  }

  // Helper methods...

  getClassName() {
    const { id } = this.props
    const { value } = this.state
    const checked = !!value
    const mods = { id, checked }
    const classList = cnFormRadio(mods, [this.props.className])
    return classList
  }

  focus() { // Invoke containing input focus method
    // if (this.inputDomElem && typeof this.inputDomElem.focus == 'function') {
    //   this.inputDomElem.focus()
    // }
  }

  select() { // Invoke containing input select method
    // if (this.inputDomElem && typeof this.inputDomElem.select == 'function') {
    //   this.inputDomElem.select()
    // }
  }

  afterRender() { // Calling after each (including first) render
    // // TODO: Move `focus` and `select` forwarding to `FormItem` (for `focusable` variant)?
    // if (this.formItemRef && this.formItemRef.current) {
    //   if (!this.formItemRef.current.focus && this.focus) {
    //     this.formItemRef.current.focus = this.focus.bind(this)
    //   }
    //   if (!this.formItemRef.current.select && this.select) {
    //     this.formItemRef.current.select = this.select.bind(this)
    //   }
    // }
  }

  updateValueWithState = (state) => {
    const { id, onChange, disabled } = this.props
    if (!disabled && typeof onChange === 'function') {
      const { value } = state
      onChange({ id, value })
    }
  }

  // Events...

  handleChange = () => {
    this.setState(({ value }) => ({ value: !value }))
  }

  // handleChange = (event) => { // ???
  //   const {
  //     id,
  //     inputId,
  //     name,
  //     onChange,
  //     disabled,
  //   } = this.props
  //   const { target } = event
  //   const { checked } = target
  //   if (!disabled && typeof onChange === 'function') {
  //     onChange({
  //       event,
  //       id: inputId || id || name,
  //       target,
  //       value: !!checked,
  //     })
  //   }
  // }

  // handleFocused = () => {
  //   this.setState({ focused: true })
  // }
  // handleUnfocused = () => {
  //   this.setState({ focused: false })
  // }

  // Render...

  renderInput() {
    const {
      id,
      inputId,
      name,
      // disabled,
      setDomRef, // From FormItemHOC
      tabIndex, // focusable
    } = this.props
    const { value } = this.state
    const checked = !!value
    const inputProps = {
      type: 'checkbox',
      className: cnFormRadio('Input'),
      id: inputId || id || name,
      name: name || inputId || id,
      checked,
      onChange: this.handleChange,
      // onFocus={this.handleFocused}
      // onBlur={this.handleUnfocused}
      ref: setDomRef,
      tabIndex,
    }
    return (
      <input {...inputProps} />
    )
  }

  render() {
    const {
      id,
      disabled,
    } = this.props
    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      // ref: setDomRef, // Init ref for FormItemHOC
      // ref: this.formItemRef,
      // tabIndex,
    }
    return (
      <div {...renderProps}>
        <div
          className={cnFormRadio('Control')}
          disabled={disabled}
        >
          <span className={cnFormRadio('Frame')}>
            <span className={cnFormRadio('Actor')} />
          </span>
          {this.renderInput()}
        </div>
      </div>
    )
  }

}

export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormRadio)
