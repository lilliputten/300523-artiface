/** @module FormRadio
 *  @class FormRadio
 *  @since 2020.04.02, 14:53
 *  @changed 2021.01.20, 23:28
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
// import FormFocusableItemHOC from 'forms/FormFocusableItemHOC';

import './FormRadio.pcss';
import './FormRadio-Themes.pcss';

const cnFormRadio = cn('FormRadio');

class FormRadio extends React.PureComponent /** @lends @FormRadio.prototype */ {

  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    handleChange: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    setDomRef: PropTypes.func, // From FormItemHOC
    theme: PropTypes.string,
    value: PropTypes.bool,
  }

  static defaultProps = {
    value: false,
  }

  // Lifecycle

  // Helper methods...

  getClassName() {
    const {
      id,
      value,
      theme,
      disabled,
      active,
      // focusesd,
    } = this.props;
    const checked = !!value;
    const mods = {
      id,
      checked,
      theme,
      disabled,
      active,
      // focused,
    };
    const classList = cnFormRadio(mods, [this.props.className]);
    return classList;
  }

  // Render...

  renderInput() {
    const {
      id,
      inputId,
      name,
      handleChange,
      value,
      setDomRef, // From FormItemHOC
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
      // ref: setInputDomRef,
      // tabIndex,
    };
    return (
      <input {...inputProps} />
    );
  }

  render() {
    const {
      id,
      disabled,
      // focusable,
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
  // FormFocusableItemHOC,
  FormItemHOC({ hoverable: true, focusable: true, framed: false }),
  FormBooleanHOC,
)(FormRadio);
