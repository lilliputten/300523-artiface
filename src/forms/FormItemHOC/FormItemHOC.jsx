/** @module FormItemHOC
 *  @class FormItemHOC
 *  @since 2019.09.25, 19:18
 *  @changed 2020.06.04, 22:58
 */

import React from 'react';
import { cn } from 'utils/configure';
import PropTypes from 'prop-types';

import './FormItemHOC.pcss';

const cnFormItem = cn('FormItem');

const classNameModifiers = [ // Pass props/state params to class modifiers
  // Display-related modifiers...
  'fullWidth',
  // 'innerFlex', // (???)
  // 'solid', // Item is unwrappable (???)
  // 'framed', // Frame around item (input field, select etc) (???)
  // Behavior-related modifiers...
  'hoverable', // Allow hover effects
  'focusable', // Allow hover effects
  'clickable',
  // States...
  'hovered',
  'focused',
  'pressed',
  'checked',
  'disabled',
  // 'fill', // (???)
];
const classNameExpectedModifierTypes = {
  checked: 'boolean',
};

const defaultState = { // Default state
  // hoverable: false,
  // focusable: false,
};

const props2State = [ // Pass props to state
  'hoverable', // Allow hover effects
  'focusable', // Allow hover effects
];

// Helper functions...

const deriveState = (...sets) => {
  return props2State.reduce((state, id) =>{
    const val = sets.reduce((val, set) => {
      return (set[id] != null /* && val == null */) ? set[id] : val;
    }, null);
    if (val != null) {
      return { ...state, [id]: val };
    }
    return state;
  }, defaultState);
};
/* // UNUSED: deriveStateFromProps
 * const deriveStateFromProps = (props, defaultState) => {
 *   return props2State.reduce((state, id) =>{
 *     const val = props[id]
 *     if (val != null) {
 *       return { ...state, [id]: val }
 *     }
 *     return state
 *   }, defaultState)
 * }
 */

// Unique id counter
let uniqIdCount = 1;

const wrapFormItemHOC = (WrappedComponent, params = {}) => class FormItem extends React.Component {

  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    clickable: PropTypes.bool,
    disabled: PropTypes.bool,
    focusable: PropTypes.bool,
    focused: PropTypes.bool,
    fullWidth: PropTypes.bool,
    hoverable: PropTypes.bool,
    hovered: PropTypes.bool,
    id: PropTypes.string,
    pressed: PropTypes.bool,
    setDomRef: PropTypes.func,
    setFormItemNodeRef: PropTypes.func,
  }

  // Helper methods...

  getStateOrPropOrParam(id) { // Get parameter from state or from props
    let val = (this.state[id] != null) ? this.state[id] :
      (this.props[id] != null) ? this.props[id] :
        params[id];
    if (classNameExpectedModifierTypes[id] && typeof val !== classNameExpectedModifierTypes[id]) {
      val = null;
    }
    return val;
  }

  createUniqId() {
    return 'FormItem' + (uniqIdCount++);
  }

  getId(props) {
    props = props || this.props;
    return props.id || this.id || (this.id = this.createUniqId());
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    this.state = deriveState(defaultState, params, props); // deriveStateFromProps(props, defaultState)
    this.id = props.id || params.id;
    // this.formItemRef = React.createRef()
  }

  static getDerivedStateFromProps(props, state) {
    // TODO: Update event subscriptions if `hoverable` flag changed?
    return deriveState(params, props, state); // deriveStateFromProps(props, state)
  }

  componentDidMount() {
    // const { formItemRef: { current } = {} } = this
    const { formItemDomRef } = this;
    if (formItemDomRef && formItemDomRef.addEventListener) {
      const hoverable = this.getStateOrPropOrParam('hoverable');
      const focusable = this.getStateOrPropOrParam('focusable');
      if (hoverable && !this.hoverableInited) {
        this.hoverableInited = true;
        formItemDomRef.addEventListener('mouseover', this.handleMouseOver);
        formItemDomRef.addEventListener('mouseout', this.handleMouseOut);
      }
      if (focusable && !this.focusableInited) {
        this.focusableInited = true;
        // formItemDomRef.addEventListener('focus', this.handleFocusIn);
        formItemDomRef.addEventListener('focus', this.handleFocusIn);
        formItemDomRef.addEventListener('blur', this.handleFocusOut);
        formItemDomRef.addEventListener('focusin', this.handleFocusIn);
        formItemDomRef.addEventListener('focusout', this.handleFocusOut);
        // console.log('FormItemHOC:componentDidMount: focus event handlers added');
        this.focus = () => { // Focus handler
          formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();
        };
      }
    }
    const { setFormItemNodeRef } = this.props;
    if (typeof setFormItemNodeRef === 'function') {
      setFormItemNodeRef(this);
    }
  }

  componentWillUnmount() {
    const { formItemDomRef } = this;
    if (formItemDomRef && formItemDomRef.removeEventListener) {
      // const hoverable = this.getStateOrPropOrParam('hoverable')
      // const focusable = this.getStateOrPropOrParam('focusable')
      if (this.hoverableInited) {
        formItemDomRef.removeEventListener('mouseover', this.handleMouseOver);
        formItemDomRef.removeEventListener('mouseout', this.handleMouseOut);
      }
      if (this.focusableInited) {
        formItemDomRef.removeEventListener('focus', this.handleFocusIn);
        formItemDomRef.removeEventListener('blur', this.handleFocusOut);
        formItemDomRef.removeEventListener('focusin', this.handleFocusIn);
        formItemDomRef.removeEventListener('focusout', this.handleFocusOut);
      }
    }
  }

  getClassName() {
    // Collect modifier values from state or props
    const mods = classNameModifiers.reduce((mods, id) =>{
      const val = this.getStateOrPropOrParam(id); // (this.state[id] != null) ? this.state[id] : this.props[id]
      if (val != null) {
        mods[id] = val;
      }
      return mods;
    }, {});
    return cnFormItem(mods, [this.props.className]);
  }

  // Handlers...

  focus = () => {
    const { formItemDomRef } = this;
    // console.log('FormItem:focus');
    // debugger;
    formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();
  }
  blur = () => {
    const { formItemDomRef } = this;
    // console.log('FormItem:focus');
    // debugger;
    formItemDomRef && formItemDomRef.focus && formItemDomRef.focus();
  }

  handleMouseOver = () => {
    const disabled = this.getStateOrPropOrParam('disabled');
    const hoverable = this.getStateOrPropOrParam('hoverable');
    // console.log('FormItemHOC:handleMouseOver');
    if (hoverable && !disabled) {
      this.setState({ hovered: true });
    }
  }
  handleMouseOut = () => {
    const disabled = this.getStateOrPropOrParam('disabled');
    const hoverable = this.getStateOrPropOrParam('hoverable');
    // console.log('FormItemHOC:handleMouseOut');
    if (hoverable && !disabled) {
      this.setState({ hovered: false });
    }
  }

  handleFocusIn = () => {
    const disabled = this.getStateOrPropOrParam('disabled');
    const focusable = this.getStateOrPropOrParam('focusable');
    if (focusable && !disabled) {
      // console.log('FormItemHOC:handleFocusIn');
      this.setState({ focused: true });
    }
  }
  handleFocusOut = () => {
    const disabled = this.getStateOrPropOrParam('disabled');
    const focusable = this.getStateOrPropOrParam('focusable');
    if (focusable && !disabled) {
      // console.log('FormItemHOC:handleFocusOut');
      this.setState({ focused: false });
    }
  }

  setDomRef = (domRef) => { // Children dom node receiver
    this.formItemDomRef = domRef;
    const { setDomRef } = this.props;
    if (typeof setDomRef === 'function') {
      setDomRef(domRef);
    }
    // domRef && domRef.focus && domRef.focus() // ???
  }

  render() {
    const {
      hovered,
      focused,
    } = this.state;
    const renderProps = {
      hovered,
      focused,
      formItemNode: this,
      className: this.getClassName(),
      setDomRef: this.setDomRef, // Children dom node receiver
      // formItemDomRef: this.formItemDomRef,
    };
    const focusable = this.getStateOrPropOrParam('focusable');
    if (focusable) {
      renderProps.tabIndex = 0;
    }
    return (
      <WrappedComponent
        {...this.props}
        {...renderProps}
      />
    );
  }

};

/** Usage:
 * FormItemHOC(component)
 * FormItemHOC(params)(component)
 */
const FormItemHOC = (params) => {
  if (typeof params === 'string') { // Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') { // Params passed -> metafabric
    return (component) => wrapFormItemHOC(component, params);
  }
  else { // Component passed -> simple fabric
    return wrapFormItemHOC(params);
  }
};

export default FormItemHOC;
