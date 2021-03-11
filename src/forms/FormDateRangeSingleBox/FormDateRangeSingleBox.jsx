/** @module FormDateRangeSingleBox
 *  @class FormDateRangeSingleBox
 *  @since 2021.01.26, 13:19
 *  @changed 2021.01.26, 13:19
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';

import config from 'config';

import FormItemHOC from '../FormItemHOC';

import ModalPopup from 'elements/ModalPopup';
import FormButton from 'forms/FormButton';

import DateTimeSelector from 'elements/DateTimeSelector';

// import * as langUtils from 'utils/lang';
// // getCommonLangText('cancelButton', 'Cancel', lang)}

import * as dateUtils from 'utils/dates';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

import './FormDateRangeSingleBox.pcss';

const cnFormDateRangeSingleBox = cn('FormDateRangeSingleBox');

// const defaultDateType = 'number';

class FormDateRangeSingleBox extends React.PureComponent /** @lends @FormDateRangeSingleBox.prototype */ {

  static propTypes = {
    // selectsEnd: PropTypes.bool,
    // selectsStart: PropTypes.bool,
    // value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
    calendarClassName: PropTypes.string,
    className: PropTypes.string,
    closeOnSelect: PropTypes.bool,
    controlButtonTheme: PropTypes.string,
    disabled: PropTypes.bool,
    endDate: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    inputId: PropTypes.string,
    onChange: PropTypes.func,
    onStartDateChange: PropTypes.func,
    onEndDateChange: PropTypes.func,
    onControlClick: PropTypes.func,
    open: PropTypes.bool,
    placeholder: PropTypes.string,
    setDomRef: PropTypes.func,
    setPopupNodeRef: PropTypes.func,
    showTime: PropTypes.bool,
    startDate: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
    timeIntervals: PropTypes.number,
    title: PropTypes.string,
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    const {
      // value,
      startDate,
      endDate,
      // selectsRange,
    } = props;
    this.id = props.id || props.inputId || props.name;
    // const dateType = props.dateType || dateUtils.detectDateValueType(startDate || endDate) || defaultDateType;
    this.state = {
      // dateType,
      startDate, // : startDate && dateUtils.convertToDateObject(startDate),
      endDate, // : endDate && dateUtils.convertToDateObject(endDate),
    };
    this.state.displayValue = this.getDisplayValue(this.state);
  }

  // Helper methods...

  getClassName() {
    const { id } = this;
    const classList = cnFormDateRangeSingleBox({
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

  getDisplayValue(params) {
    params = params || this.state;
    const {
      // value,
      startDate,
      endDate,
    } = params;
    const {
      showTime,
      // selectsRange,
    } = this.props;
    const dateFormat = showTime ? config.constants.dateTimeFormat : config.constants.dateFormat;
    return [
      startDate && dateUtils.formatDateToString(startDate, dateFormat),
      endDate && dateUtils.formatDateToString(endDate, dateFormat),
    ].filter(Boolean).join(config.constants.dateRangeDelim);
  }

  onChange = ({ startDate, startDateObj, endDate, endDateObj, value, valueObj, selectedStart }) => {
    const {
      onChange,
      closeOnSelect,
      onStartDateChange,
      onEndDateChange,
    } = this.props;
    const setParams = { id: this.id, startDate, startDateObj, endDate, endDateObj, value, valueObj, selectedStart };
    setParams.displayValue = this.getDisplayValue(setParams); // dateUtils.formatDateToString(value); // TODO: showTime option
    // console.log('FormDateRangeSingleBox:onChange', setParams);
    this.setState(setParams);
    if (typeof onChange === 'function') {
      onChange(setParams);
    }
    if (selectedStart && typeof onStartDateChange === 'function') {
      onStartDateChange(setParams);
    }
    if (!selectedStart && typeof onEndDateChange === 'function') {
      onEndDateChange(setParams);
    }
    if (closeOnSelect /* && lastRangeChanged && lastRangeChanged !== rangeId */ && this.popupNode) {
      this.popupNode.close();
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
      // text,
      placeholder,
      title,
      controlButtonTheme,
      fullWidth = true,
      disabled,
    } = this.props;
    const {
      open,
    } = this.state;
    // const icon = open ? 'faCalendarCheck' : 'regular:faCalendar';
    const icon = open ? faCalendarCheck : faCalendar;
    const buttonText = this.getItemsText() || placeholder; // || text;
    return (
      <FormButton
        icon={icon}
        rightIcon
        theme={controlButtonTheme || 'default'}
        variation="popupControl"
        text={buttonText}
        title={title}
        fullWidth={fullWidth}
        disabled={disabled}
        checkable
        checked={open}
      />
    );
  }

  renderPopupContent() {
    const {
      startDate,
      endDate,
    } = this.state;
    const {
      calendarClassName,
      id,
      inputId,
      showTime,
      timeIntervals,
    } = this.props;
    const dateSelectorProps = {
      id,
      inputId,
      onChange: this.onChange,
      startDate,
      endDate,
      inline: true,
      calendarClassName,
      showTime,
      timeIntervals,
      selectsRange: true,
    };
    return (
      <DateTimeSelector {...dateSelectorProps} />
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
    const popupControl = this.renderControlContent();
    const popupContent =  this.renderPopupContent();
    const popupProps = {
      id,
      className: this.getClassName(),
      // contentClassName: 'XXX', // ???
      disabled,
      title,
      open,
      popupControl,
      popupContent,
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

export default FormItemHOC({ solid: true, hoverable: true })(FormDateRangeSingleBox);
