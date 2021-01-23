/** @module FormDateTime
 *  @class FormDateTime
 *  @since 2021.01.23, 19:44
 *  @changed 2021.01.23, 19:44
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import FormItemHOC from '../FormItemHOC';

// import FormGroup from 'forms/FormGroup'
// import FormGroup from '../FormGroup'
import ModalPopup from 'elements/ModalPopup';
// import { FormItemPopup } from 'elements/ModalPopup'
// import DatePicker from 'elements/DatePicker';
import FormButton from 'forms/FormButton';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import * as dateUtils from 'utils/dates';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FormDateTime.pcss';

const cnFormDateTime = cn('FormDateTime');

const defaultDateType = 'number';

class FormDateTime extends React.PureComponent /** @lends @FormDateTime.prototype */ {

  static propTypes = {
    // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])) ]),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    onChange: PropTypes.func,
    open: PropTypes.bool,
    // options: PropTypes.arrayOf(PropTypes.shape({ val: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]), text: PropTypes.string })),
    placeholder: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    setDomRef: PropTypes.func,
    // setNodeRef: PropTypes.func,
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    // this.formItemRef = React.createRef()
    this.id = props.id || props.inputId || props.name;
    const dateType = props.dateType || dateUtils.detectDateValueType(props.value) || defaultDateType;
    const value = dateUtils.convertToDateObject(props.value);
    const displayValue = dateUtils.formatDateTimeToString(value); // TODO: showTime option
    this.state = {
      dateType,
      value,
      displayValue,
    };
  }

  // Helper methods...

  getClassName() {
    const { id } = this;
    const classList = cnFormDateTime({
      id,
    }, [this.props.className]);
    return classList;
  }

  getItemsText() {
    const { displayValue } = this.state;
    return displayValue;
  }

  // Handlers...

  onControlClick = (params) => {
    const { onControlClick } = this.props;
    if (typeof onControlClick === 'function') {
      onControlClick(params);
    }
  }
  /* // onDatePickerItemClick ???
   * onDatePickerItemClick = (params) => {
   *   console.log('FormDateTime:onDatePickerItemClick', params);
   *   debugger;
   *   const { closeOnSelect, onDatePickerItemClick } = this.props;
   *   if (typeof onDatePickerItemClick === 'function') {
   *     onDatePickerItemClick(params);
   *   }
   *   if (closeOnSelect && this.popupNode) {
   *     this.popupNode.close();
   *   }
   * }
   */
  onDatePickerChange = (value) => {
    const { onChange } = this.props;
    const { id, inputId, name/* , singleChoice */ } = this.props;
    const displayValue = dateUtils.formatDateTimeToString(value); // TODO: showTime option
    // console.log('FormDateTime:onDatePickerChange', { id, inputId, value, displayValue });
    // debugger;
    this.setState({ value, displayValue });
    if (typeof onChange === 'function') {
      const setId = id || inputId || name;
      const setParams = { id: setId, value };
      onChange(setParams);
    }
  }

  setPopupRef = (node) => {
    const { setPopupNodeRef } = this.props;
    this.popupNode = node;
    if (setPopupNodeRef && typeof setPopupNodeRef === 'function') {
      setPopupNodeRef(node);
    }
  }

  // Render...

  renderControlContent() {
    const {
      text,
      placeholder,
      title,
      controlButtonTheme,
      fullWidth = true,
      disabled,
    } = this.props;
    const buttonText = this.getItemsText() || placeholder || text;
    return (
      <FormButton
        icon="faCalendar"
        rightIcon
        theme={controlButtonTheme || 'default'}
        variation="popupControl"
        text={buttonText}
        title={title}
        fullWidth={fullWidth}
        disabled={disabled}
      />
    );
  }

  renderDatePickerContent() {
    const {
      disabled,
      // inputId, // ???
    } = this.props;
    const {
      value,
    } = this.state;
    return (
      <DatePicker
        checkable={true}
        onChange={this.onDatePickerChange}
        onClick={this.onDatePickerItemClick}
        value={value}
        disabled={disabled}
        inline
      />
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
    const datePickerContent =  this.renderDatePickerContent();

    const popupProps = {
      id,
      className: this.getClassName(),
      contentClassName: 'XXX',
      disabled,
      title,
      open,
      popupControl: controlContent,
      popupContent: datePickerContent,
      onControlClick: this.onControlClick,
      fullWidth,
      ref: this.setPopupRef,
      setDomRef,
    };

    return (
      <ModalPopup {...popupProps} />
    );

  }

}

export default FormItemHOC({ solid: true, hoverable: true })(FormDateTime);
