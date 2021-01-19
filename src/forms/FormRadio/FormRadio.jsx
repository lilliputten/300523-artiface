/** @module FormRadio
 *  @class FormRadio
 *  @since 2020.04.02, 14:53
 *  @changed 2020.04.02, 14:53
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';
import { compose } from 'redux';

// import FormItem from '../FormItem'
import FormItemHOC from '../FormItemHOC';
import FormBooleanHOC from '../FormBooleanHOC';

// import { withFormContext } from 'helpers/FormContext';
import FormInteractiveItemHOC from 'forms/FormInteractiveItemHOC';

import './FormRadio.pcss';
import './FormRadio-Themes.pcss';

const cnFormRadio = cn('FormRadio');

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

  // Lifecycle

  /* // UNUSED: componentDidMount
   * componentDidMount() {
   *   const { registerKeyPressHandler } = this.props;
   *   if (typeof registerKeyPressHandler === 'function') { // From `FormInteractiveItemHOC`
   *     // Register callback with `FormInteractiveItemHOC`
   *     this.interactiveKeyPressHandler && registerKeyPressHandler(this.interactiveKeyPressHandler);
   *   }
   * }
   */

  // Helper methods...

  getClassName() {
    const { id, value, theme } = this.props;
    const checked = !!value;
    const mods = { id, checked, theme };
    const classList = cnFormRadio(mods, [this.props.className]);
    return classList;
  }

  // Handlers...

  /* // UNUSED? interactiveKeyPressHandler
   * interactiveKeyPressHandler = (params) => {
   *   console.log('FormRadio:interactiveKeyPressHandler', params);
   *   debugger;
   * }
   */

  /* // UNUSED: onKeyPress (see FormInteractiveItemHOC)
   * onKeyPress = (event) => {
   *   var {
   *     key,
   *     keyCode,
   *     charCode,
   *   } = event;
   *   const {
   *     id,
   *     onKeyPress,
   *     onEnterPressed,
   *     // onEscPressed,
   *     formContextNode, // FormContext Provider
   *   } = this.props;
   *   const cbProps = { event, id, key, keyCode, charCode };
   *   onKeyPress && onKeyPress(cbProps);
   *   // @see https://keycode.info/
   *   const isEnterPressed = (key === 'Enter'); // (keyCode === 13); // Enter?
   *   // const isEscPressed = (key === 'Escape'); // (keyCode === 27); // Esc?
   *   // console.log('FormRadio:onKeyPress', cbProps);
   *   // debugger;
   *   if (isEnterPressed) {
   *     if (onEnterPressed) {
   *       onEnterPressed(cbProps);
   *     }
   *     if (formContextNode && formContextNode.onInputEnterPressed) {
   *       formContextNode.onInputEnterPressed(cbProps);
   *     }
   *   }
   * }
   */

  // Render...

  renderInput() {
    const {
      id,
      inputId,
      name,
      setDomRef, // From FormItemHOC
      tabIndex, // focusable
      handleChange,
      value,
    } = this.props;
    const checked = !!value;
    const inputProps = {
      type: 'checkbox',
      className: cnFormRadio('Input'),
      id: inputId || id || name,
      name: name || inputId || id,
      checked,
      onChange: handleChange,
      ref: setDomRef,
      tabIndex,
    };
    return (
      <input {...inputProps} />
    );
  }

  render() {
    const {
      id,
      disabled,
      // setDomRef, // See input control rendering above
    } = this.props;
    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      onKeyPress: this.onKeyPress,
      // ref: setDomRef,
    };
    return (
      <div {...renderProps}>
        <div
          className={cnFormRadio('Control', ['FormItem-Control'])}
          disabled={disabled}
        >
          <span className={cnFormRadio('Frame')}>
            <span className={cnFormRadio('Actor')} />
          </span>
          {this.renderInput()}
        </div>
      </div>
    );
  }

}

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormRadio)
export default compose(
  // withFormContext,
  FormInteractiveItemHOC,
  FormItemHOC({ hoverable: true, focusable: true, framed: false }),
  FormBooleanHOC,
)(FormRadio);
