/** @module FormBooleanHOC
 *  @class FormBooleanHOC
 *  @since 2020.12.10, 22:17
 *  @changed 2021.07.12, 13:32
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';
import config from 'config';

const cnFormBooleanHOC = cn('FormBoolean');

const wrapFormBooleanHOC = (WrappedComponent, params = {}) => class FormBoolean extends React.Component {

  static propTypes = {
    inputId: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func, // Change value handler (only for user changes).
    onUpdate: PropTypes.func, // Update value handler. Called on any value change (including by an external way).
  }

  static defaultProps = {
    id: params.id,
    value: false,
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    // this.formItemRef = React.createRef()
    const { value } = this.props;
    this.id = props.id || params.id || props.inputId || props.name;
    this.state = {
      value,
      active: false,
    };
  }

  componentDidMount() {
    this.mounted = true;
    // this.afterUpdate();
    /* // UNUSED: interactiveKeyPressHandler
     * const { registerKeyPressHandler } = this.props;
     * if (typeof registerKeyPressHandler === 'function') { // From `FormInteractiveItemHOC`
     *   // Register callback with `FormInteractiveItemHOC`
     *   registerKeyPressHandler(this.interactiveKeyPressHandler);
     * }
     */
    // this.addEventListeners();
  }

  componentWillUnmount() {
    // this.removeEventListeners();
    this.mounted = false;
  }

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
      this.updateValueWithState();
    }
    // this.afterUpdate(); // ???
  }

  // Helper methods...

  getClassName() {
    const { id } = this;
    // const { id } = this.props
    const { value } = this.state;
    const checked = !!value;
    const mods = { id, checked };
    const classList = cnFormBooleanHOC(mods, [this.props.className]);
    return classList;
  }

  /* // focus, blur -- ???
   * focus() { // Invoke containing input focus method
   *   if (this.inputDomElem && typeof this.inputDomElem.focus == 'function') {
   *     this.inputDomElem.focus()
   *   }
   * }
   * blur() { // Invoke containing input blur method
   *   if (this.inputDomElem && typeof this.inputDomElem.blur == 'function') {
   *     this.inputDomElem.blur()
   *   }
   * }
   */

  updateValueWithState = (that) => {
    const { onUpdate, disabled, inputId } = this.props;
    if (!disabled && typeof onUpdate === 'function') {
      const state = that && that.state || this.state;
      const { value } = state;
      onUpdate({ id: inputId || this.id, value });
    }
  }

  // Events...

  /* // UNUSED: interactiveKeyPressHandler
   * interactiveKeyPressHandler = (params) => { // NOTE: State changed automatically by html input control. This code is redundant.
   *   const { isSpacePressed } = params;
   *   if (isSpacePressed) { // Toggle state if space pressed
   *     // this.handleChange();
   *     // To return false for cancel furher actions processing?
   *   }
   * }
   */

  handleChange = (params) => {
    const { onChange, disabled, inputId } = this.props;
    if (!disabled) {
      this.setState(({ value: stateValue }) => {
        let value = params && params.value;
        if (value == null) {
          value = !stateValue;
        }
        // TODO: Call alternative update handler
        return { active: true, value };
      }, () => {
        if (typeof onUpdate === 'function') {
          const { value } = this.state;
          onChange({ id: inputId || this.id, value });
        }
      });
      setTimeout(() => {
        this.setState({ active: false });
      }, config.css.transitionTime);
    }
  }

  setDomRef = (inputDomElem) => {
    this.inputDomElem = inputDomElem;
    const { setDomRef } = this.props;
    if (typeof setDomRef === 'function') {
      setDomRef(inputDomElem);
    }
  }

  // Render...

  render() {
    const {
      id,
      disabled,
    } = this.props;
    const { active, value } = this.state;
    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      value,
      active,
      handleChange: this.handleChange,
      setDomRef: this.setDomRef,
      setInputDomRef: this.setInputDomRef,
    };
    return (
      <WrappedComponent
        {...this.props}
        {...renderProps}
        // id={id}
      />
    );
  }

};

/** Usage:
 * FormBooleanHOC(component)
 * FormBooleanHOC(params)(component)
 */
const FormBooleanHOC = (params) => {
  if (typeof params === 'string') { // Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') { // Params passed -> metafabric
    return (component) => wrapFormBooleanHOC(component, params);
  }
  else { // Component passed -> simple fabric
    return wrapFormBooleanHOC(params);
  }
};

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormBooleanHOC)
export default FormBooleanHOC;

