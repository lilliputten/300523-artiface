/** @module Menu
 *  @class Menu
 *  @since 2020.10.27, 02:58
 *  @changed 2021.01.28, 21:55
 */

import React from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect';
import { cn } from 'utils/configure';

import MenuItem from '../MenuItem';

import './Menu.pcss';

const cnMenu = cn('Menu');

// Unique id counter
let uniqIdCount = 1;

class Menu extends React.PureComponent /** @lends @Menu.prototype */ {

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    layout: PropTypes.string,
    mode: PropTypes.string, // ???
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    selectable: PropTypes.bool,
    setDomRef: PropTypes.func,
    singleChoice: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]),
  }

  // Helper fuctions...

  getClassName() {
    // const id = this.getId()
    const {
      id,
      disabled,
      mode,
      layout,
    } = this.props;
    const className = cnMenu({
      id,
      disabled,
      mode,
      layout,
    }, [this.props.className]);
    return className;
  }

  setChildrenItemsFromProps() {
    // console.log('Menu:setChildrenItemsFromProps', {
    //   children,
    // })
    let children = this.props.children;
    const selectedList = [];
    if (Array.isArray(children)) {
      const { singleChoice } = this.props;
      const { value, selected } = this.props;
      const propsSelected = (singleChoice && value != null) ? [value] : selected;
      children = children.map((item) => {
        const isArray = !!item && Array.isArray(item);
        const isObject = !!item && typeof item ==='object' && !isArray; // Array.isArray(item)
        const isElement = isObject && React.isValidElement(item);
        const isMenuItem = isElement && item.type === MenuItem;
        const isRawObject = isObject && !isElement;
        // console.log('Menu:setChildrenItemsFromProps:item', {
        //   item,
        //   isElement,
        //   isArray,
        //   isObject,
        //   isMenuItem,
        // })
        if (isRawObject || isMenuItem) {
          const itemProps = isRawObject ? item : item.props;
          // Construct unique key values...
          const val = itemProps.val;
          const checked = Array.isArray(propsSelected) ? propsSelected.includes(val) : itemProps.checked;
          const checkable = itemProps.checkable != null ? itemProps.checkable : this.props.selectable;
          const newProps = {
            ...itemProps,
            onClick: itemProps.onClick || this.onMenuItemClick,
            checkable,
            checked,
          };
          if (isRawObject) { // Raw object -> create MenuItem
            const key = item && item.key || this.getId() + '_Item_' + (itemProps.id || itemProps.val);
            item = (<MenuItem {...newProps} key={key} />);
            // isMenuItem = isElement = true
          }
          else if (isMenuItem) { // MenuItem -> Add onClick handler if handler is not defined
            item = { ...item, props: newProps };
          }
          if (item.props.checked && (!singleChoice || !selectedList.length)) {
            selectedList.push(val);
          }
        }
        // TODO: Process arrays (subitems/groups)?
        return item;
      });
    }
    this.setState({
      items: children,
      selectedList,
    });
    // return children
  }

  updateChildrenItems(checkedValStates) {
    const { id, singleChoice, onChange } = this.props;
    let { items } = this.state;
    const selectedList = [];
    if (Array.isArray(items)) {
      items = items.map((item) => {
        const isObject = !!item && typeof item ==='object';
        const isElement = isObject && React.isValidElement(item);
        const isMenuItem = isElement && item.type === MenuItem;
        if (isMenuItem) {
          const itemProps = item.props;
          const { val, checked } = itemProps;
          let checkedVal = checkedValStates[val];
          if (checkedVal == null) { // Check out all other items if single mode
            checkedVal = singleChoice ? false : checked;
          }
          if (checkedVal !== checked) {
            item = { ...item, props: { ...itemProps, checked: checkedVal } };
          }
          if (checkedVal) { // && (!singleChoice || !selectedList.length)) {
            selectedList.push(val);
          }
        }
        return item;
      });
    }
    this.setState({
      items,
      selectedList,
    });
    if (typeof onChange === 'function') {
      const params = { id, selected: selectedList };
      if (singleChoice && selectedList && selectedList.length) { // Add `val` param if singleChoice mode (and has selected)
        params.value = selectedList[0];
      }
      onChange(params);
    }
  }

  createUniqId() {
    return 'Menu' + (uniqIdCount++);
  }

  getId(props) {
    props = props || this.props;
    return props.id || this.id || (this.id = this.createUniqId());
  }

  // Lifecycle...

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setChildrenItemsFromProps();
  }

  componentDidUpdate(prevProps) {
    const prevChildren = prevProps.children;
    const children = this.props.children;
    if (prevChildren !== children) {
      // TODO: To update items states?
      this.setChildrenItemsFromProps();
    }
  }

  // Handlers...

  onMenuItemClick = ({ /* id, component, */ val }) => {
    const { onClick, singleChoice } = this.props;
    const { selectedList } = this.state;
    const setSelected = !selectedList.includes(val);
    if (singleChoice === 'forced' && !setSelected) { // Don not made changes if single mode and clicked item was selected
      return;
    }
    if (typeof onClick === 'function') { // Invoke onClick handler
      onClick({ value: val });
    }
    this.updateChildrenItems({ [val]: setSelected }); // Apply items changes
  }

  // Render...

  renderContent() {
    const { items } = this.state;
    return items;
  }

  render() {

    const {
      id,
      setDomRef, // From FormItemHOC
    } = this.props;

    const renderProps = {
      id,
      className: this.getClassName(),
      ref: setDomRef, // Init ref for FormItemHOC
    };

    const content = this.renderContent();

    return (
      <div {...renderProps}>
        {content}
      </div>
    );
  }

}

export default Menu;
