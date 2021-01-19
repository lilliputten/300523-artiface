/** @module FormInteractiveItemHOC
 *  @class FormInteractiveItemHOC
 *  @since 2021.01.19, 18:21
 *  @changed 2021.01.19, 20:27
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth, react/require-optimization */

import React from 'react';
// import { compose } from 'redux';
import PropTypes from 'prop-types';
// import { cn } from 'utils/configure';
import { withFormContext } from 'helpers/FormContext';

const wrapFormInteractiveItemHOC = (WrappedComponent, params = {}) => {
  class FormInteractiveItem extends React.Component {

    static propTypes = {
      id: PropTypes.string,
      // name: PropTypes.string,
      // value: PropTypes.bool,
      // disabled: PropTypes.bool,
      setDomRef: PropTypes.func,
      onKeyPress: PropTypes.func,
      onEnterPressed: PropTypes.func,
      onEscPressed: PropTypes.func,
      onSpacePressed: PropTypes.func,
      // FormContext Provider
      formContextNode: PropTypes.shape({ onInputEnterPressed: PropTypes.func }),
    };

    static defaultProps = {
      id: params.id,
    };

    registeredKeyPressHandlers = []; // Registered keypress callback handlers list...

    // Lifecycle methods...

    componentWillUnmount() {
      this.removeEventListeners();
    }

    // Helper methods...

    // focus, blur?

    addEventListeners() {
      if (!this.addedEventListeners && this.domNode) {
        this.addedEventListeners = true;
        this.domNode.addEventListener('keypress', this.onKeyPress);
      }
    }

    removeEventListeners() {
      if (this.addedEventListeners && this.domNode) {
        this.addedEventListeners = false;
        this.domNode.removeEventListener('keypress', this.onKeyPress);
      }
    }

    // Events...

    onKeyPress = (event) => {
      var {
        key,
        code,
        keyCode,
        charCode,
      } = event;
      const {
        id,
        onKeyPress,
        onEnterPressed,
        onEscPressed,
        onSpacePressed,
        formContextNode, // FormContext Provider
      } = this.props;
      // @see https://keycode.info/
      const isEnterPressed = (code === 'Enter'); // (keyCode === 13); // Enter?
      const isEscPressed = (code === 'Escape'); // (keyCode === 27); // Esc?
      const isSpacePressed = (code === 'Space'); // (keyCode === 27); // Space?
      const cbProps = {
        event,
        id,
        key,
        code,
        keyCode,
        charCode,
        isEnterPressed,
        isEscPressed,
        isSpacePressed,
        domNode: this.domNode,
      };
      // console.log('FormInteractiveItemHOC:onKeyPress', cbProps);
      // debugger;
      // Process registered callback handlers...
      if (this.registeredKeyPressHandlers.length) {
        const result = this.registeredKeyPressHandlers.reduce((result, cb) => {
          return (typeof cb === 'function' && cb(cbProps) === false) ? false : result;
        }, undefined);
        // Don't process other handlers and return `false` value if one of registered handlers rerurned `false`.
        if (result === false) {
          // TODO: Stop event propagation?
          // event.stopImmediatePropagation();
          event.stopPropagation();
          return false;
        }
      }
      if (typeof onKeyPress === 'function' ) {
        onKeyPress(cbProps);
      }
      if (isEnterPressed) {
        if (typeof onEnterPressed === 'function') {
          onEnterPressed(cbProps);
        }
        if (formContextNode && typeof formContextNode.onInputEnterPressed === 'function') {
          formContextNode.onInputEnterPressed(cbProps);
        }
      }
      if (isEscPressed && typeof onEscPressed === 'function') {
        onEscPressed(cbProps);
      }
      if (isSpacePressed && typeof onSpacePressed === 'function') {
        onSpacePressed(cbProps);
      }
    }

    registerKeyPressHandler = (handler) => {
      this.registeredKeyPressHandlers.push(handler);
    }

    setDomRef = (domNode) => {
      const { setDomRef } = this.props;
      this.domNode = domNode;
      // console.log('FormInteractiveItemHOC:setDomRef', {
      //   domNode,
      // });
      this.addEventListeners();
      if (typeof setDomRef === 'function') { // Pass to parent if callback specified
        setDomRef(domNode);
      }
    }

    // Render...

    render() {
      const renderProps = {
        setDomRef: this.setDomRef,
        registerKeyPressHandler: this.registerKeyPressHandler,
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
 * FormInteractiveItemHOC(component)
 * FormInteractiveItemHOC(params)(component)
 */
const FormInteractiveItemHOC = (params) => {
  if (typeof params === 'string') { // Passed identifier
    params = { id: params };
  }
  if (typeof params === 'object') { // Params passed -> metafabric
    return (component) => wrapFormInteractiveItemHOC(component, params);
  }
  else { // Component passed -> simple fabric
    return wrapFormInteractiveItemHOC(params);
  }
};

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormInteractiveItemHOC)
export default FormInteractiveItemHOC;

