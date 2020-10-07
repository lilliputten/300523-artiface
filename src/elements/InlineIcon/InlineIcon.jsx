/** @module InlineIcon
 *  @class InlineIcon
 *  @since 2020.10.07, 02:08
 *  @changed 2020.10.07, 02:08
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as defaultIcons from '@fortawesome/free-solid-svg-icons'
// import * as regularIcons from '@fortawesome/free-regular-svg-icons'
// TODO: Add optional prefix ('regular', 'solid', 'default') to icon id for choosing icons set.


import './InlineIcon.pcss'

const cnInlineIcon = cn('InlineIcon')

class InlineIcon extends React.Component /** @lends @InlineIcon.prototype */ {

  getClassName() {
    const classList = cnInlineIcon({
    }, [this.props.className])
    return classList
  }

  render() {

    const {
      id,
      tag,
      title,
      icon,
      // key,
    } = this.props

    // Create fortawesome icon element if passed icon image (svg icon)
    const iconComponent = (icon && typeof icon === 'string') ? defaultIcons[icon] : icon
    const content = (iconComponent && iconComponent.iconName) ? <FontAwesomeIcon className={cnInlineIcon('IconImg')} icon={iconComponent} /> : iconComponent

    const renderProps = {
      id,
      className: this.getClassName(),
      title,
      // key,
    }

    const tagName = tag || 'span'
    const element = React.createElement(tagName, renderProps, content)
    return element
  }

}

export default InlineIcon

// export const wrapInlineIcon = (icon) => { }
