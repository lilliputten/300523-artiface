/** @module FormButton
 *  @class FormButton
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.07, 03:00
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import FormItemHOC from '../FormItemHOC'

import InlineIcon from 'elements/InlineIcon'

import './FormButton.pcss'
import './FormButton-Styles.pcss'

const cnFormButton = cn('FormButton')

class FormButton extends React.Component /** @lends @FormButton.prototype */ {

  /* // UNUSED: constructor
   * constructor(props) {
   *   super(props)
   *   // (OLD) Get props...
   *   // const {
   *   //   hoverable,
   *   //   clickable,
   *   //   checked,
   *   // } = props
   *   this.state = {
   *     // // (OLD) FormItem states...
   *     // solid: true,
   *     // hoverable: (hoverable != null) ? hoverable : true,
   *     // clickable: (clickable != null) ? clickable : true,
   *     // checked,
   *     // framed: true,
   *   }
   * }
   */

  /* // UNUSED: getDerivedStateFromProps
   * static getDerivedStateFromProps(props[> , state <]) { // ??? -- M.b. better to evaluate in render?
   *   const {
   *     // plain,
   *     // style,
   *     hasIcon,
   *     hasText,
   *     onlyIcon,
   *     text,
   *     icon,
   *     children,
   *     // hoverable,
   *     // clickable,
   *     // checked,
   *   } = props
   *   return {
   *     // hoverable: (hoverable != null) ? hoverable : true,
   *     // clickable: (clickable != null) ? clickable : true,
   *     // checked,
   *     hasIcon: !!(hasIcon || icon),
   *     hasText: !onlyIcon && !!(hasText || text || children),
   *   }
   * }
   */

  hasIcon() {
    const { icon, hasIcon } = this.props
    return !!(hasIcon || icon)
  }

  hasText() {
    const {
      hasText,
      onlyIcon,
      children,
      text,
    } = this.props
    return !onlyIcon && !!(hasText || text || children)
  }

  getClassName() {
    // TODO: Refactor properties!
    const {
      id,
      onlyIcon,
      largeIcon,
      rightIcon,
      style,
      fullWidth,
      // checked,
      type,
      // plain,
    } = this.props
    const classList = cnFormButton({
      id,
      style,
      fullWidth,
      // checked,
      // plain,
      hasIcon: this.hasIcon(),
      hasText: this.hasText(),
      onlyIcon,
      largeIcon,
      rightIcon,
      type,
      solid: true,
    }, [this.props.className])
    return classList
  }

  // Handlers...

  onClick = (event) => {
    const {
      disabled,
      onClick,
      clickable,
    } = this.props
    if (clickable && !disabled && onClick && typeof onClick === 'function') {
      onClick(event)
    }
  }

  // Render...

  renderIcon() {
    const hasIcon = this.hasIcon()
    if (hasIcon) {
      const { icon } = this.props
      if (icon && icon.type === InlineIcon) { // Already InlineIcon
        // Extend with updated `className` props
        const props = {
          ...icon.props,
          className: cnFormButton('Icon', [icon.props.className]),
        }
        const newIcon = { ...icon, props }
        return newIcon
      }
      return (
        <InlineIcon icon={icon} className={cnFormButton('Icon')} />
      )
    }
  }

  renderText() {
    const hasText = this.hasText() // !onlyIcon && !!(hasText || text || children
    if (hasText) {
      const { text, children } = this.props
      return hasText && (
        <span className={cnFormButton('Text')}>
          {text || children}
        </span>
      )
    }
  }

  render() {

    const {
      id,
      disabled,
      // name,
      // children,
      // text,
      tag,
      type,
      title,
      // icon,
      setDomRef,
      // faIcon,
      // hasIcon,
      // hasText,
      // onClick,
    } = this.props

    const iconElem = this.renderIcon() // Icon element
    const textElem = this.renderText() // Text element

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    const renderProps = {
      // ...basicRenderProps,
      id,
      className: this.getClassName(),
      disabled,
      title,
      type,
      onClick: this.onClick,
      ref: setDomRef,
    }

    // const content = [ iconElem, textElem ] // children || text
    const content = (
      <React.Fragment>
        {iconElem}
        {textElem}
      </React.Fragment>
    )

    const tagName = tag || 'div'
    const element = React.createElement(tagName, renderProps, content)
    return element
  }

}

FormButton.propTypes = {
  id: PropTypes.string,

  hoverable: PropTypes.bool, // FormItem: Allowed hovered events
  focusable: PropTypes.bool, // FormItem: Allowed focused events

  // TODO: Actualize & check next properties, implement cosmos fixtures...

  // TODO: formId -- id for form element (passed on form submit)
  name: PropTypes.string, // ???
  disabled: PropTypes.bool,
  onClick: PropTypes.func,

  hasIcon: PropTypes.bool, // Optional
  hasText: PropTypes.bool, // Optional
  text: PropTypes.string, // Text content (may be passed as node children)
  icon: PropTypes.any, // Icon component. May be as image resource loaded with `file/url-loader` as `FontAwesomeIcon` component.
  onlyIcon: PropTypes.bool, // Only icon
  largeIcon: PropTypes.bool, // Large icon
  rightIcon: PropTypes.bool, // Icon placed at right side
  // TODO: size: PropTypes.string, // Different form item sizes? (eg: md -- default, sm, xs, lg, xl, xxl)

  style: PropTypes.string, // Button style (plain, default, primary, secondary, error, warn, success, info, etc -- some are in progress -- see styles file)
  fullWidth: PropTypes.bool, // Occupies all horizontal space
  // plain: PropTypes.bool, // ??? Plain icon (no border & background -- if no style specified, looks as link)

  checked: PropTypes.bool, // FormItem: Checked state
}
export default FormItemHOC({ hoverable: true })(FormButton)
