/** @module FormSelect
 *  @class FormSelect
 *  @since 2020.10.28, 22:49
 *  @changed 2021.07.07, 19:54
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';

import FormItemHOC from '../FormItemHOC';

import ModalPopup from 'elements/ModalPopup';
import Menu from 'elements/Menu';
import FormButton from 'forms/FormButton';

import './FormSelect.pcss';

const cnFormSelect = cn('FormSelect');

class FormSelect extends React.PureComponent /** @lends @FormSelect.prototype */ {

  static propTypes = {
    // setNodeRef: PropTypes.func,
    // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
    closeOnSelect: PropTypes.bool,
    controlButtonTheme: PropTypes.string,
    // itemSelectedTheme: PropTypes.string,
    wrapContent: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    inputId: PropTypes.string,
    itemTheme: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onControlClick: PropTypes.func,
    onMenuItemClick: PropTypes.func,
    open: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({ val: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]), text: PropTypes.string })),
    placeholder: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])),
    setDomRef: PropTypes.func,
    setPopupNodeRef: PropTypes.func,
    singleChoice: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]), // false, true, 'forced'. See Menu `singleChoice` prop definition.
    text: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    // this.formItemRef = React.createRef()
    this.id = props.id || props.inputId || props.name;
    const { selected, value } = props;
    this.state = {
      selected: Array.isArray(selected) ? selected : value && [value] || []
    };
    // if (props.setNodeRef) {
    //   props.setNodeRef(this);
    // }
  }

  // Helper methods...

  getClassName() {
    const { id } = this;
    const classList = cnFormSelect({
      id,
    }, [this.props.className]);
    return classList;
  }

  getItemsText() {
    const { selected } = this.state;
    const { options } = this.props;
    const text = Array.isArray(options) && Array.isArray(selected) && options.map(({ val, text }) => {
      if (selected.includes(val)) {
        return text;
      }
    }).filter(Boolean).join(', ');
    return text;
  }

  // Handlers...

  onControlClick = (params) => {
    const { onControlClick } = this.props;
    if (typeof onControlClick === 'function') {
      onControlClick(params);
    }
  }
  onMenuItemClick = (params) => {
    const { closeOnSelect, onMenuItemClick } = this.props;
    if (typeof onMenuItemClick === 'function') {
      onMenuItemClick(params);
    }
    if (closeOnSelect && this.popupNode) {
      this.popupNode.close();
    }
  }
  onMenuChange = (params) => {
    const { onChange, disabled } = this.props;
    if (!disabled) {
      const { selected, /* id, value */ } = params;
      if (typeof onChange === 'function') {
        const { id, inputId, name, singleChoice } = this.props;
        const value = singleChoice ? selected[0] : selected;
        const setId = id || inputId || name;
        const setParams = { id: setId, inputId, name, selected, value };
        onChange(setParams);
      }
      this.setState({ selected });
    }
  }

  setPopupRef = (node) => {
    const { setPopupNodeRef } = this.props;
    this.popupNode = node;
    if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
      setPopupNodeRef(node);
    }
  }

  handleOpenState = ({ open }) => {
    this.setState({ open });
  }

  // Render...

  renderControlContent() {
    const {
      text,
      placeholder,
      title,
      controlButtonTheme,
      fullWidth, // = true,
      disabled,
      inputId,
      maxWidth,
    } = this.props;
    const { open } = this.state;
    const buttonText = this.getItemsText() || placeholder || text;
    const style = { maxWidth };
    return (
      <FormButton
        inputId={inputId}
        icon="faChevronDown"
        rightIcon
        theme={controlButtonTheme || 'primary'}
        variation="popupControl"
        rotatedIcon
        text={buttonText}
        title={title}
        fullWidth={fullWidth}
        disabled={disabled}
        checkable
        checked={open}
        style={style}
      />
    );
  }

  renderMenuContent() {
    const {
      singleChoice,
      options,
      disabled,
      itemTheme,
      // itemSelectedTheme,
      wrapContent,
      // inputId, // ???
    } = this.props;
    const {
      selected,
    } = this.state;
    return (
      <Menu
        selectable={true}
        singleChoice={singleChoice}
        onChange={this.onMenuChange}
        onClick={this.onMenuItemClick}
        selected={selected}
        // value={value}
        disabled={disabled}
        itemTheme={itemTheme}
        // itemSelectedTheme={itemSelectedTheme}
        wrapContent={wrapContent}
      >
        {options}
      </Menu>
    );
  }

  render() {

    const {
      id,
      disabled,
      title,
      open,
      fullWidth,
      setDomRef,
    } = this.props;

    const controlContent = this.renderControlContent();
    const menuContent =  this.renderMenuContent();

    const popupProps = {
      id,
      className: this.getClassName(),
      // contentClassName: 'XXX', // ???
      disabled,
      title,
      open,
      popupControl: controlContent,
      popupContent: menuContent,
      onControlClick: this.onControlClick,
      fullWidth,
      ref: this.setPopupRef,
      setDomRef,
      handleOpenState: this.handleOpenState,
    };

    return (
      <ModalPopup {...popupProps} />
    );

  }

}

export default FormItemHOC({ solid: true, hoverable: true })(FormSelect);
