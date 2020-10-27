/** @module Menu
 *  @class Menu
 *  @since 2020.10.27, 02:58
 *  @changed 2020.10.27, 05:56
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import MenuItem from '../MenuItem'

import './Menu.pcss'

const cnMenu = cn('Menu')

// Unique id counter
let uniqIdCount = 1

class Menu extends React.Component /** @lends @Menu.prototype */ {

  // Helper fuctions...

  getClassName() {
    // const id = this.getId()
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

  setChildrenItems(children, checkedValStates) {
    // console.log('Menu:setChildrenItems', {
    //   children,
    // })
    // debugger
    const valChecked = {}
    if (Array.isArray(children)) {
      children = children.map((item) => {
        const isArray = !!item && Array.isArray(item)
        const isObject = !!item && typeof item ==='object' && !isArray // Array.isArray(item)
        const isElement = isObject && React.isValidElement(item)
        const isMenuItem = isElement && item.type === MenuItem
        const isRawObject = isObject && !isElement
        // console.log('Menu:setChildrenItems:item', {
        //   item,
        //   isElement,
        //   isArray,
        //   isObject,
        //   isMenuItem,
        // })
        // debugger
        if (isRawObject || isMenuItem) {
          const itemProps = isRawObject ? item : item.props
          // Construct unique key values...
          const val = itemProps.val
          const checked = checkedValStates && checkedValStates[val] != null ? checkedValStates[val] : itemProps.checked
          const newProps = {
            ...itemProps,
            onClick: itemProps.onClick || this.onMenuItemClick,
            checked,
          }
          if (isRawObject) { // Raw object -> create MenuItem
            const key = item && item.key || this.getId() + '_Item_' + (itemProps.id || itemProps.val)
            item = (<MenuItem {...newProps} key={key} />)
            // isMenuItem = isElement = true
          }
          else if (isMenuItem) { // MenuItem -> Add onClick handler if handler is not defined
            item = { ...item, props: newProps }
          }
          if (checked != null) {
            valChecked[val] = checked
          }
        }
        // TODO: Process arrays (subitems/groups)?
        return item
      })
    }
    this.setState({
      items: children,
      valChecked,
    })
    // return children
  }

  createUniqId() {
    return 'Menu' + (uniqIdCount++)
  }

  getId(props) {
    props = props || this.props
    return props.id || this.id || (this.id = this.createUniqId())
  }

  // Lifecycle...

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const children = this.props.children
    this.setChildrenItems(children)
  }

  componentDidUpdate(prevProps) {
    const prevChildren = prevProps.children
    const children = this.props.children
    if (prevChildren !== children) {
      // TODO: To update items states?
      this.setChildrenItems(children)
    }
  }

  // Handlers...

  onMenuItemClick = ({ /* id, component, */ val }) => {
    const { valChecked, items } = this.state
    // console.log('Menu:onMenuItemClick', { id, val, component, valChecked, items })
    // debugger
    const checked = !valChecked[val]
    // TODO: Process cases for single(optional,mandatory) selection modes
    this.setChildrenItems(items, { [val]: checked })
  }

  // Render...

  renderContent() {
    const { items } = this.state
    return items
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
