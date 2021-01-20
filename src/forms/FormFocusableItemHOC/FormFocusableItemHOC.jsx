/** @module FormFocusableItemHOC
 *  @class FormFocusableItemHOC
 *  @since 2021.01.19, 18:21
 *  @changed 2021.01.19, 20:27
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth, react/require-optimization */

import React from 'react';
// import { compose } from 'redux';
import PropTypes from 'prop-types';
// import { cn } from 'utils/configure';
import { withFormContext } from 'helpers/FormContext';

const wrapFormFocusableItemHOC = (WrappedComponent, params = {}) => {
  class FormInteractiveItem extends React.Component {

    static propTypes = {
      id: PropTypes.string,
      disabled: PropTypes.bool,
      setDomRef: PropTypes.func,
      onFocusIn: PropTypes.func,
      onFocusOut: PropTypes.func,
    };

    static defaultProps = {
      id: params.id,
    };

    // Lifecycle methods...

    constructor(props) {
      super(props);
      this.state = {
        focused: false,
      };
      // call `addEventListeners` on `setDomRef`
    }

    componentWillUnmount() {
      this.removeEventListeners();
    }

    // Helper methods...

    // focus, blur?

    addEventListeners() {
      if (!this.addedEventListeners && this.domNode) {
        this.addedEventListeners = true;
        this.domNode.addEventListener('focusin', this.onFocusIn);
      }
    }

    removeEventListeners() {
      if (this.addedEventListeners && this.domNode) {
        this.addedEventListeners = false;
        this.domNode.removeEventListener('focusout', this.onFocusOut);
      }
    }

    // Events...

    onFocusIn = () => {
      if (!this.props.disabled) {
        console.log('FormFocusableItemHOC:onFocusIn');
        this.mounted && this.setState({ focused: true });
        if (typeof this.props.onFocusIn === 'function') { // Propogate event if handler passed
          this.props.onFocusIn(event);
        }
      }
    }
    onFocusOut = (event) => {
      if (!this.props.disabled) {
        console.log('FormFocusableItemHOC:onFocusOut');
        this.mounted && this.setState({ focused: false });
        if (typeof this.props.onFocusOut === 'function') { // Propogate event if handler passed
          this.props.onFocusOut(event);
        }
      }
    }

    setDomRef = (domNode) => {
      const { setDomRef } = this.props;
      this.domNode = domNode;
      console.log('FormFocusableItemHOC:setDomRef', { domNode });
      debugger;
      this.addEventListeners();
      if (typeof setDomRef === 'function') { // Pass to parent if callback specified
        setDomRef(domNode);
      }
    }

    // Render...

    render() {
      const renderProps = {
        focused: this.state.focused && !this.props.disabled,
        setDomRef: this.setDomRef,
        // registerKeyPressHandler: this.registerKeyPressHandler, // ???
      };
      return (
        <WrappedComponent
          {...this.props}
          {...renderProps}
          // id={id}
        />
      );
    }

  }
  return withFormContext(FormInteractiveItem);
};

/** Usage:
 * FormFocusableItemHOC(component)
 * FormFocusableItemHOC(params)(component)
 */
const FormFocusableItemHOC = (params) => {
  if (typeof params === 'string') { // Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') { // Params passed -> metafabric
    return (component) => wrapFormFocusableItemHOC(component, params);
  }
  else { // Component passed -> simple fabric
    return wrapFormFocusableItemHOC(params);
  }
};

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormFocusableItemHOC)
export default FormFocusableItemHOC;

