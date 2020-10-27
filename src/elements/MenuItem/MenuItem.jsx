/** @module MenuItem
 *  @class MenuItem
 *  @since 2020.10.27, 03:05
 *  @changed 2020.10.27, 03:06
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import InlineIcon from 'elements/InlineIcon'

import FormItemHOC from 'forms/FormItemHOC'

import './MenuItem.pcss'

const cnMenuItem = cn('MenuItem')

class MenuItem extends React.Component /** @lends @MenuItem.prototype */ {

  // Event handlers...

  onClick = () => {
    const { id, val, onClick } = this.props
    if (typeof onClick === 'function') {
      onClick({ id, val, component: this })
    }
  }

  // Helper methods...

  getClassName() {
    const {
      id,
      checkable,
      withIcon,
      checked,
      disabled,
      // title,
      // onClick,
    } = this.props
    const className = cnMenuItem({
      id,
      checkable,
      withIcon,
      checked,
      disabled,
    }, [this.props.className])
    return className
  }

  // Render...

  renderIconContent() {
    const {
      withIcon,
      checkable,
      checked,
      icon,
    } = this.props
    if ((withIcon && icon) || (checkable && checked)) {
      const iconContent = icon || 'faCheck'
      return iconContent && <InlineIcon icon={iconContent} className={cnMenuItem('Icon')} />
    }
  }

  renderTextContent() {
    const {
      children,
      text,
    } = this.props
    return (
      <span className={cnMenuItem('Text')}>
        {children || text}
      </span>
    )
  }

  render() {

    const {
      // id,
      val,
      htmlId,
      setDomRef, // From FormItemHOC
    } = this.props

    const renderProps = {
      // id,
      id: htmlId,
      className: this.getClassName(),
      onClick: this.onClick,
      ref: setDomRef, // Init ref for FormItemHOC
    }

    const iconContent = this.renderIconContent()
    const textContent = this.renderTextContent()

    console.log('MenuItem:render', val)

    return (
      <div {...renderProps}>
        {iconContent}
        {textContent}
      </div>
    )
  }

}

export default FormItemHOC({ hoverable: true })(MenuItem)
