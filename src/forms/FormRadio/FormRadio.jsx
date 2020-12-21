/** @module FormRadio
 *  @class FormRadio
 *  @since 2020.04.02, 14:53
 *  @changed 2020.04.02, 14:53
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth */

import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'utils/configure'
import { compose } from 'redux'

// import FormItem from '../FormItem'
import FormItemHOC from '../FormItemHOC'
import FormBooleanHOC from '../FormBooleanHOC'

import './FormRadio.pcss'
import './FormRadio-Themes.pcss'

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

  // Helper methods...

  getClassName() {
    const { id, value, theme } = this.props
    const checked = !!value
    const mods = { id, checked, theme }
    const classList = cnFormRadio(mods, [this.props.className])
    return classList
  }

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
    } = this.props
    const checked = !!value
    const inputProps = {
      type: 'checkbox',
      className: cnFormRadio('Input'),
      id: inputId || id || name,
      name: name || inputId || id,
      checked,
      onChange: handleChange,
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
    }
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
    )
  }

}

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormRadio)
export default compose(
  FormItemHOC({ hoverable: true, focusable: true, framed: false }),
  FormBooleanHOC,
)(FormRadio)
