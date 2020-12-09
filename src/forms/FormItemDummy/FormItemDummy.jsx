/** @module FormItemDummy
 *  @class FormItemDummy
 *  @desc Demo form item
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */

import React from 'react'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'

import FormItemHOC from '../FormItemHOC'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FormItemDummy.pcss'

const cnFormItemDummy = cn('FormItemDummy')

class FormItemDummy extends React.Component /** @lends @FormItemDummy.prototype */ {

  constructor(props) {
    super(props)
    // const {
    //   hoverable,
    //   clickable,
    //   checked,
    // } = props
    this.state = {
      // // FormItem states...
      // solid: true,
      // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      // framed: true,
    }
  }

  static getDerivedStateFromProps(props/* , state */) { // ???
    const {
      // plain,
      // style,
      hasIcon,
      hasText,
      onlyIcon,
      text,
      icon,
      children,
      // hoverable,
      // clickable,
      // checked,
    } = props
    return {
      // hoverable: (hoverable != null) ? hoverable : true,
      // clickable: (clickable != null) ? clickable : true,
      // checked,
      hasIcon: !!(hasIcon || icon),
      hasText: !onlyIcon && !!(hasText || text || children),
    }
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
    const {
      hasIcon,
      hasText,
    } = this.state
    const classList = cnFormItemDummy({
      id,
      style,
      fullWidth,
      // checked,
      // plain,
      hasIcon,
      hasText,
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

  render() {

    const {
      id,
      // name,
      children,
      text,
      tag,
      type,
      title,
      icon,
      setDomRef,
      // faIcon,
      // hasIcon,
      // hasText,
      // onClick,
    } = this.props
    const {
      hasIcon,
      hasText,
    } = this.state

    // Create fortawesome icon element if passed icon image (svg icon)
    const iconImg = (icon && icon.iconName) ? <FontAwesomeIcon className={cnFormItemDummy('IconImg')} icon={icon} /> : icon
    const iconElem = hasIcon && (
      <span key="Icon" className={cnFormItemDummy('Icon')}>
        {iconImg}
      </span>
    )

    // Text element
    const textElem = hasText && (
      <span key="Text" className={cnFormItemDummy('Text')}>
        {text || children}
      </span>
    )

    // const basicRenderProps = this.getRenderProps() // Get from props not from overrided `super`
    const renderProps = {
      // ...basicRenderProps,
      id,
      className: this.getClassName(),
      title,
      type,
      onClick: this.onClick,
      ref: setDomRef,
    }

    const content = [ iconElem, textElem ] // children || text

    const tagName = tag || 'div'
    const element = React.createElement(tagName, renderProps, content)
    return element
  }

}

export default FormItemHOC(FormItemDummy)
