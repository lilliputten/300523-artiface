/** @module Menu
 *  @class Menu
 *  @since 2020.10.27, 02:58
 *  @changed 2020.10.27, 21:16
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

  setChildrenItemsFromProps(/* children, checkedValStates */) {
    // console.log('Menu:setChildrenItemsFromProps', {
    //   children,
    // })
    // debugger
    let children = this.props.children
    const valChecked = {}
    if (Array.isArray(children)) {
      children = children.map((item) => {
        const isArray = !!item && Array.isArray(item)
        const isObject = !!item && typeof item ==='object' && !isArray // Array.isArray(item)
        const isElement = isObject && React.isValidElement(item)
        const isMenuItem = isElement && item.type === MenuItem
        const isRawObject = isObject && !isElement
        // console.log('Menu:setChildrenItemsFromProps:item', {
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
          // const checked = checkedValStates && checkedValStates[val] != null ? checkedValStates[val] : itemProps.checked
          const checkable = itemProps.checkable != null ? itemProps.checkable : this.props.checkable
          const newProps = {
            ...itemProps,
            onClick: itemProps.onClick || this.onMenuItemClick,
            checkable,
            // checked,
          }
          if (isRawObject) { // Raw object -> create MenuItem
            const key = item && item.key || this.getId() + '_Item_' + (itemProps.id || itemProps.val)
            item = (<MenuItem {...newProps} key={key} />)
            // isMenuItem = isElement = true
          }
          else if (isMenuItem) { // MenuItem -> Add onClick handler if handler is not defined
            item = { ...item, props: newProps }
          }
          if (item.props.checked) {
            valChecked[val] = true
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

  updateChildrenItems(checkedValStates) {
    const { singleChoice, onChange } = this.props
    let { valChecked, items } = this.state
    if (Array.isArray(items)) {
      items = items.map((item) => {
        const isObject = !!item && typeof item ==='object'
        const isElement = isObject && React.isValidElement(item)
        const isMenuItem = isElement && item.type === MenuItem
        if (isMenuItem) {
          const itemProps = item.props
          const { val, checked } = itemProps
          let setChecked = checkedValStates[val]
          if (setChecked != null) {
            if (setChecked !== checked) {
              item = { ...item, props: { ...itemProps, checked: setChecked } }
              valChecked[val] = setChecked
            }
          }
          else if (singleChoice && itemProps.checked) {
            item = { ...item, props: { ...itemProps, checked: false } }
            valChecked[val] = false
          }
        }
        return item
      })
    }
    this.setState({
      items,
      valChecked,
    })
    if (typeof onChange === 'function') {
      const checkedValues = Object.entries(valChecked)
        .map(([val, checked]) => checked && val)
        .filter(Boolean)
      onChange({ checkedValues })
    }
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
    // const children = this.props.children
    this.setChildrenItemsFromProps()
  }

  componentDidUpdate(prevProps) {
    const prevChildren = prevProps.children
    const children = this.props.children
    if (prevChildren !== children) {
      // TODO: To update items states?
      this.setChildrenItemsFromProps()
    }
  }

  // Handlers...

  onMenuItemClick = ({ /* id, component, */ val }) => {
    const { onClick, singleChoice } = this.props
    if (typeof onClick === 'function') { // Invoke onClick handler
      onClick({ val })
    }
    const { valChecked } = this.state
    const setChecked = !valChecked[val]
    if (singleChoice === 'mandatory' && !setChecked) { // Don not made changes if single mode and clicked item was checked
      return
    }
    this.updateChildrenItems({ [val]: setChecked }) // Apply items changes
  }

  // Render...

  renderContent() {
    const { items } = this.state
    return items
  }

  render() {

    const {
      id,
      // val,
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
