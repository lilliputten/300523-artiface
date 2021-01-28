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
    className: PropTypes.string,
    closeOnSelect: PropTypes.bool,
    controlButtonTheme: PropTypes.string,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    inputId: PropTypes.string,
    onChange: PropTypes.func,
    onControlClick: PropTypes.func,
    open: PropTypes.bool,
    placeholder: PropTypes.string,
    selectsEnd: PropTypes.bool,
    selectsRange: PropTypes.bool,
    selectsStart: PropTypes.bool,
    setDomRef: PropTypes.func,
    setPopupNodeRef: PropTypes.func,
    showTime: PropTypes.bool,
    title: PropTypes.string,
    value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date) ]),
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    const {
      value,
    } = props;
    this.id = props.id || props.inputId; // || props.name;
    this.state = {
      value,
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
    } = params;
    const {
      showTime,
    } = this.props;
    const dateFormat = showTime ? config.constants.dateTimeFormat : config.constants.dateFormat;
    return dateUtils.formatDateToString(value, dateFormat);
  }

  onChange = ({ value, valueObj }) => {
    const {
      onChange,
      closeOnSelect,
    } = this.props;
    let setParams = { id: this.id, value, valueObj };
    setParams.displayValue = this.getDisplayValue(setParams); // dateUtils.formatDateToString(value); // TODO: showTime option
    // console.log('FormDateTime:onChange', setParams);
    this.setState(setParams);
    if (typeof onChange === 'function') {
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
    } = this.props;
    const dateSelectorProps = {
      inline: true,
      calendarClassName,
      onChange: this.onChange,
      value,
      showTime,
      selectsRange,
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
