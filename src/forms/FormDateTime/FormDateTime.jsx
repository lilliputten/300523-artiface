/** @module FormDateTime
 *  @class FormDateTime
 *  @since 2021.01.23, 19:44
 *  @changed 2021.08.19, 17:23
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */

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
    allowEmpty: PropTypes.bool,
  }

  // Lifecycle methods...

  constructor(props) {
    super(props);
    let { value, allowEmpty } = props;
    if (!value) {
      value = allowEmpty ? '' : Date.now();
    }
    this.id = props.id || props.inputId; // || props.name;
    this.state = {
      value,
      displayValue: this.getDisplayValue({ value }),
    };
    // this.state.displayValue = this.getDisplayValue(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPropsValue = prevProps.value;
    const value = this.props.value;
    // const stateValue = this.state.value;
    const prevStateValue = prevState.value;
    if (value !== prevPropsValue && value !== prevStateValue) { // New value from props
      // console.log('FormDateTime:componentDidUpdate (value)', {
      //   prevPropsValue,
      //   value,
      //   // stateValue,
      //   prevStateValue,
      // });
      this.setState({
        value,
        displayValue: this.getDisplayValue({ value }),
      });
    }
  }

  // Helper methods...

  getClassName() {
    const { id } = this;
    const classList = cnFormDateTime({
      id,
    }, [this.props.className]);
    return classList;
  }

  // Handlers...

  onControlClick = (params) => {
    const { onControlClick } = this.props;
    if (typeof onControlClick === 'function') {
      onControlClick(params);
    }
  }

  getDisplayValue(state) {
    state = state || this.state;
    const { value } = state;
    // const { allowEmpty } = this.props;
    // Is empty-value?
    if (!value) {
      return '';
    }
    const { showTime } = this.props;
    const dateFormat = showTime ? config.constants.dateTimeFormat : config.constants.dateFormat;
    return dateUtils.formatDateToString(value, dateFormat);
  }

  onChange = ({ value, valueObj }) => {
    const {
      onChange,
      inputId,
      name,
      closeOnSelect,
    } = this.props;
    const displayValue = this.getDisplayValue({ value });
    let setData = {
      id: this.id,
      inputId,
      name,
      value,
      valueObj,
      displayValue,
    };
    // setData.displayValue = this.getDisplayValue(setData); // dateUtils.formatDateToString(value); // TODO: showTime option
    // console.log('FormDateTime:onChange', setData);
    this.setState({ value, displayValue });
    if (typeof onChange === 'function') {
      onChange(setData);
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
      id,
      inputId,
      placeholder,
      title,
      controlButtonTheme,
      fullWidth = true,
      disabled,
    } = this.props;
    const {
      open,
      displayValue,
    } = this.state;
    // const icon = open ? 'faCalendarCheck' : 'regular:faCalendar';
    const icon = open ? faCalendarCheck : faCalendar;
    const buttonText = displayValue || placeholder; // || text;
    return (
      <FormButton
        id={id}
        inputId={inputId}
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

  renderDateSelectorContent() {
    const {
      value,
    } = this.state;
    const {
      id,
      inputId,
      showTime,
      timeIntervals,
      selectsRange,
      calendarClassName,
      selectsStart,
      selectsEnd,
      startDate,
      endDate,
      minDate,
      maxDate,
      now,
      isEndDate,
    } = this.props;
    const dateSelectorProps = {
      id,
      inputId,
      inline: true,
      calendarClassName,
      onChange: this.onChange,
      value,
      showTime,
      timeIntervals,
      selectsRange,
      selectsStart,
      selectsEnd,
      startDate,
      endDate,
      minDate,
      maxDate,
      now,
      isEndDate,
    };
    // console.log('FormDateTime:renderDateSelectorContent', {
    //   dateSelectorProps,
    // });
    return (
      <DateTimeSelector {...dateSelectorProps} />
    );
  }

  render() {

    const {
      // id,
      disabled,
      title,
      open,
      fullWidth,
      setDomRef,
    } = this.props;

    const controlContent = this.renderControlContent();
    const dateSelectorContent =  this.renderDateSelectorContent();

    const popupProps = {
      // id,
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
