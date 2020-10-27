/** @module Menu
 *  @class Menu
 *  @since 2020.10.27, 02:58
 *  @changed 2020.10.27, 02:58
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import './Menu.pcss'

const cnMenu = cn('Menu')

class Menu extends React.Component /** @lends @Menu.prototype */ {

  getClassName() {
    const {
      id,
      disabled,
      mode,
      layout,
    } = this.props
    const className = cnMenu({
      id,
      disabled,
      mode,
      layout,
    }, [this.props.className])
    return className
  }

  renderContent() {
    const {
      children,
    } = this.props
    return children
  }

  render() {

    const {
      id,
      // title,
      // onClick,
      // children,
    } = this.props

    const renderProps = {
      id,
      className: this.getClassName(),
      // title,
      // onClick,
      // key,
    }

    const content = this.renderContent()

    return (
      <div {...renderProps}>
        {content}
      </div>
    )
  }

}

export default Menu
