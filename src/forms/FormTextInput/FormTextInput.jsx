/** @module FormTextInput
 *  @class FormTextInput
 *  @since 2020.10.07, 00:20
 *  @changed 2021.01.19, 16:08
 */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { cn } from 'utils/configure';

import InlineIcon from 'elements/InlineIcon';
import FormItemHOC from '../FormItemHOC';

// import { withFormContext } from 'helpers/FormContext';
import FormInteractiveItemHOC from 'forms/FormInteractiveItemHOC';

import './FormTextInput.pcss';

const cnFormTextInput = cn('FormTextInput');

class FormTextInput extends React.PureComponent /** @lends @FormTextInput.prototype */ {

  // Lifecycle...

  constructor(props) {
    super(props);
    const { value = '' } = this.props;
    this.state = {
      value,
    };
  }

  /* // UNUSED: componentDidMount
   * componentDidMount() {
   *   const { registerKeyPressHandler } = this.props;
   *   if (typeof registerKeyPressHandler === 'function') { // From `FormInteractiveItemHOC`
   *     // Register callback with `FormInteractiveItemHOC`
   *     this.interactiveKeyPressHandler && registerKeyPressHandler(this.interactiveKeyPressHandler);
   *   }
   * }
   */

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value;
    const propsValue = this.props.value;
    const stateValue = this.state.value;
    if (propsValue !== prevValue && propsValue !== stateValue) { // New value from props
      this.setState({
        value: propsValue,
      }, this.updateValueWithState);
    }
    else if (stateValue !== prevState.value) { // New value from state
      this.updateValueWithState(this.state);
    }
  }

  // Helper methods...

  hasValue() {
    const {
      value,
    } = this.state;
    return value != null && value !== '';
  }

  hasIcon() {
    const {
      icon,
      hasIcon,
      hasClear,
    } = this.props;
    return hasIcon || !!icon || (hasClear && this.hasValue());
  }

  updateValueWithState = (state) => {
    const { id, inputId, name, onChange, disabled, numericValue } = this.props;
    if (!disabled && typeof onChange === 'function') {
      let { value } = state;
      if (numericValue && !isNaN(value)) {
        value = Number(value);
      }
      const setId = id || inputId || name;
      onChange({ id: setId, value });
    }
  }

  getClassName() {
    const {
      id,
      hasClear,
    } = this.props;
    const hasValue = this.hasValue();
    const hasClearActive = hasClear && hasValue;
    const classList = cnFormTextInput({
      id,
      hasIcon: this.hasIcon(),
      hasValue: this.hasValue(),
      hasClear,
      hasClearActive,
    }, [this.props.className]);
    return classList;
  }

  // Event handlers...

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    this.setState({ value });
  }

  onClearClick = () => {
    this.setState({ value: '' });
  }

  onFocusIn = () => {
    if (this.mounted) {
      if (this.inputDomElem) {
        this.inputDomElem.style.backgroundColor = '#fff'; // Try to override standard html autofill styles
      }
      this.setState({ focused: true });
    }
    // window.addEventListener('keypress', this.onKeyPress);
    if (typeof this.props.onFocusIn === 'function') { // Propogate event if handler passed
      this.props.onFocusIn(event);
    }
  }
  onFocusOut = (event) => {
    this.mounted && this.setState({ focused: false });
    // window.removeEventListener('keypress', this.onKeyPress);
    if (typeof this.props.onFocusOut === 'function') { // Propogate event if handler passed
      this.props.onFocusOut(event);
    }
  }

  setInputDomRef = (inputDomElem) => {
    this.inputDomElem = inputDomElem;
    if (typeof this.props.setInputDomRef === 'function') {
      this.props.setInputDomRef(inputDomElem);
    }
  }

  // Render...

  renderClearIcon() { // DELETE
    const {
      hasClear,
      clearIcon,
      clearIconTitle,
      // onClearClick,
    } = this.props;
    const hasValue = this.hasValue();
    const hasClearActive = hasClear && hasValue;
    return hasClearActive && (
      <InlineIcon
        icon={clearIcon || 'faTimes'}
        className={cnFormTextInput('Icon', { mode: 'Clear' })}
        onClick={this.onClearClick}
        title={clearIconTitle || 'Clear content'}
      />
    );
  }

  renderIcon() { // DELETE
    const {
      // hasIcon,
      icon,
      iconTitle,
      onIconClick,
    } = this.props;

    return icon && (
      <InlineIcon
        icon={icon}
        className={cnFormTextInput('Icon')}
        onClick={onIconClick}
        title={iconTitle}
      />
    );
  }

  renderInput() {
    const {
      value,
    } = this.state;
    const {
      id,
      inputId,
      name,
      disabled,
      // onChange,
      placeholder,
      type = 'text',
    } = this.props;

    const inputProps = {
      key: 'Input',
      type,
      className: cnFormTextInput('Control', ['FormItem-Control']),
      id: inputId || id || name,
      name: name || inputId || id,
      disabled: disabled,
      placeholder: placeholder,
      ref: this.setInputDomRef,
      onChange: this.handleChange,
      onKeyPress: this.onKeyPress,
      value,
      // onFocus: this.onFocusIn,
      // onBlur: this.onFocusOut,
    };
    return (
      <input
        {...inputProps}
      />
    );
  }

  render() {

    const {
      id,
      disabled,
      type = 'text',
      title,
      setDomRef, // For FormItem interactive dom access
    } = this.props;

    const inputElem = this.renderInput();

    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      title,
      type,
      onClick: this.onClick,
      ref: setDomRef,
    };

    return (
      <div {...renderProps}>
        {inputElem}
        {this.renderIcon() || this.renderClearIcon()}
      </div>
    );

  }

  static propTypes = {
    id: PropTypes.string,
  }

}

// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormTextInput);
export default compose(
  // withFormContext,
  FormInteractiveItemHOC,
  FormItemHOC({ solid: true, hoverable: true, focusable: true, framed: true }),
)(FormTextInput);

