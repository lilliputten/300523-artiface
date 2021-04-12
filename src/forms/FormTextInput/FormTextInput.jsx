/** @module FormTextInput
 *  @class FormTextInput
 *  @since 2020.10.07, 00:20
 *  @changed 2021.04.12, 14:26
 */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { cn } from 'utils/configure';
// import * as langUtils from 'utils/lang';
import { getCommonLangText } from 'utils/lang';

import InlineIcon from 'elements/InlineIcon';
import FormItemHOC from '../FormItemHOC';

// import { withFormContext } from 'helpers/FormContext';
import FormInteractiveItemHOC from 'forms/FormInteractiveItemHOC';

import './FormTextInput.pcss';

const cnFormTextInput = cn('FormTextInput');

class FormTextInput extends React.PureComponent /** @lends @FormTextInput.prototype */ {

  static propTypes = {
    // TODO: minValue, maxValue, maxLength
    allowEmpty: PropTypes.bool,
    className: PropTypes.string,
    clearIcon: PropTypes.bool,
    clearIconTitle: PropTypes.string,
    defaultValue: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    disabled: PropTypes.bool,
    hasClear: PropTypes.bool,
    hasClearActive: PropTypes.bool,
    hasIcon: PropTypes.bool,
    hasValue: PropTypes.bool,
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Icon id or icon object
    iconTitle: PropTypes.string,
    id: PropTypes.string,
    inputId: PropTypes.string,
    name: PropTypes.string,
    numericValue: PropTypes.bool,
    onChange: PropTypes.func,
    onFocusIn: PropTypes.func,
    onFocusOut: PropTypes.func,
    onIconClick: PropTypes.func,
    placeholder: PropTypes.string,
    setDomRef: PropTypes.func,
    setInputDomRef: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  }

  static defaultProps = {
    // allowEmpty: true,
    value: '',
  }

  // Lifecycle...

  constructor(props) {
    super(props);
    const value = this.getCorrectedValue(props.value || props.defaultValue || ((props.numericValue && !props.allowEmpty) ? 0 : ''));
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
    const prevPropsValue = prevProps.value;
    // const propsValue = this.getCorrectedValue(this.props.value);
    const propsValue = this.props.value;
    const stateValue = this.state.value;
    const prevStateValue = prevState.value;
    if (propsValue !== prevPropsValue && propsValue !== prevStateValue) { // New value from props
      // console.log('FormTextInput:componentDidUpdate (propsValue)', {
      //   prevPropsValue,
      //   propsValue,
      //   stateValue,
      //   prevStateValue,
      // });
      this.setState({
        value: this.getCorrectedValue(propsValue),
      }, this.updateValueWithState);
    }
    else if (stateValue !== prevStateValue) { // New value from state
      // console.log('FormTextInput:componentDidUpdate (stateValue)', {
      //   prevPropsValue,
      //   propsValue,
      //   stateValue,
      //   prevStateValue,
      // });
      this.setState({
        value: stateValue,
      }, this.updateValueWithState);
      // this.updateValueWithState(this.state);
    }
  }

  // Helper methods...

  getCorrectedValue(value) {
    // const origValue = value;
    const { numericValue, defaultValue, allowEmpty } = this.props;
    if (numericValue && typeof value !== 'number') {
      value = String(value).replace(/[^0-9.,-]/g, '');
      value = parseInt(value, 10);
      if (isNaN(value)) {
        value = defaultValue || allowEmpty ? '' : 0;
      }
    }
    // console.log('FormTextInput:getCorrectedValue', {
    //   origValue,
    //   value,
    //   numericValue,
    // });
    return value;
  }

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
    state = state || this.state;
    const { id, inputId, name, onChange, disabled } = this.props;
    if (!disabled && typeof onChange === 'function') {
      let { value } = state;
      // console.log('FormTextInput:updateValueWithState', {
      //   value,
      // });
      const setId = id || inputId || name;
      onChange({ id: setId, value });
    }
  }

  getClassName() {
    const {
      id,
      hasClear,
      className,
    } = this.props;
    const hasValue = this.hasValue();
    const hasClearActive = hasClear && hasValue;
    const classList = cnFormTextInput({
      id,
      hasIcon: this.hasIcon(),
      hasValue: this.hasValue(),
      hasClear,
      hasClearActive,
    }, [className]);
    return classList;
  }

  // Event handlers...

  handleChange = (event) => {
    const { target } = event;
    const origValue = target.value;
    const value = this.getCorrectedValue(origValue);
    this.setState({ value });
  }

  onClearClick = () => {
    const { allowEmpty, numericValue } = this.props;
    const value = (numericValue && !allowEmpty) ? 0 : '';
    this.setState({ value });
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
      lang,
    } = this.props;
    const hasValue = this.hasValue();
    const hasClearActive = hasClear && hasValue;
    const title = clearIconTitle || getCommonLangText('clearButton', 'Clear', lang);
    return hasClearActive && (
      <InlineIcon
        icon={clearIcon || 'faTimes'}
        className={cnFormTextInput('Icon', { mode: 'Clear' })}
        onClick={this.onClearClick}
        title={title}
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

}

// export default FormItemHOC({ solid: true, hoverable: true, framed: true })(FormTextInput);
export default compose(
  // withFormContext,
  FormInteractiveItemHOC,
  FormItemHOC({ solid: true, hoverable: true, focusable: true, framed: true }),
)(FormTextInput);
