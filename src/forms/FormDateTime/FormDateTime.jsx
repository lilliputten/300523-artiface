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

import './FormDateTime.pcss';

const cnFormDateTime = cn('FormDateTime');

// const defaultDateType = 'number';

class FormDateTime extends React.PureComponent /** @lends @FormDateTime.prototype */ {

  static propTypes = {
    calendarClassName: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    onChange: PropTypes.func,
    open: PropTypes.bool,
    placeholder: PropTypes.string,
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
    setDomRef: PropTypes.func,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
    // startDate: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
    // endDate: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    const {
      value,
      startDate,
      endDate,
      // selectsRange,
    } = props;
    this.id = props.id || props.inputId || props.name;
    // const dateType = props.dateType || dateUtils.detectDateValueType(value || startDate || endDate) || defaultDateType;
    this.state = {
      // dateType,
      value, // : value && dateUtils.convertToDateObject(value),
    };
    this.state.displayValue = this.getDisplayValue(this.state);
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

  getDisplayValue(params) {
    params = params || this.state;
    const {
      value,
      // startDate,
      // endDate,
    } = params;
    const {
      showTime,
      // selectsRange,
    } = this.props;
    const dateFormat = showTime ? config.constants.dateTimeFormat : config.constants.dateFormat;
    // if (selectsRange) {
    //   return [
    //     startDate && dateUtils.formatDateTimeToString(startDate, dateFormat),
    //     endDate && dateUtils.formatDateTimeToString(endDate, dateFormat),
    //   ].filter(Boolean).join(config.constants.dateRangeDelim);
    // }
    return dateUtils.formatDateToString(value, dateFormat);
  }

  onChange = ({ value }) => {
    const {
      // showTime,
      // selectsRange,
      onChange,
      // id,
      // inputId,
      // name
      closeOnSelect,
    } = this.props;
    // const { dateType } = this.state;
    let setParams = { id: this.id, value };
    // if (selectsRange) {
    //   const [ startDate, endDate ] = value;
    //   const isEndDate = (startDate && !endDate);
    //   setParams = {
    //     id: this.id,
    //     startDate, // : startDate || this.state.startDate,
    //     endDate, // : endDate || this.state.endDate,
    //     selectsStart: !isEndDate,
    //     selectsEnd: isEndDate,
    //   };
    // }
    setParams.displayValue = this.getDisplayValue(setParams); // dateUtils.formatDateTimeToString(value); // TODO: showTime option
    console.log('FormDateTime:onChange', value, setParams);
    // debugger;
    this.setState(setParams);
    if (typeof onChange === 'function') {
      // const cbParams = { ...setParams }; // Convert date values to target date type...
      // [ 'value', 'startDate', 'endDate' ].forEach(id => {
      //   if (cbParams[id]) {
      //     cbParams[id] = dateUtils.convertDateToType(cbParams[id], dateType);
      //   }
      // });
      onChange(setParams);
    }
    if (closeOnSelect && this.popupNode) {
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
      />
    );
  }

  renderDatePickerContent() {
    const {
      value,
    } = this.state;
    const {
      showTime,
      selectsRange,
      calendarClassName,
      // startDate,
      // endDate,
    } = this.props;
    // const lang = langUtils.getLang();
    // const locale = lang && lang.components && lang.components.lang || config.app.defaultLocale; // TODO?
    const dateSelectorProps = {
      inline: true,
      calendarClassName,
      onChange: this.onChange,
      value,
      // startDate,
      // endDate,
      showTime,
      selectsRange,
      // startDate,
      // endDate,
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

    const controlContent = this.renderControlContent();
    const dateSelectorContent =  this.renderDatePickerContent();

    const popupProps = {
      id,
      className: this.getClassName(),
      // contentClassName: 'XXX', // ???
      disabled,
      title,
      open,
      popupControl: controlContent,
      popupContent: dateSelectorContent,
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

export default FormItemHOC({ solid: true, hoverable: true })(FormDateTime);
