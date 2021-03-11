/** @module FormDateRange
 *  @class FormDateRange
 *  @since 2021.01.26, 13:19
 *  @changed 2021.03.11, 22:16
 *
 *  TODO 2020.12.16, 23:07 -- Add hidden html form element (for form submission)
 */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';

import config from 'config';
import * as formUtils from 'utils/forms';
import * as dateUtils from 'utils/dates';

import * as langUtils from 'utils/lang';
// // langUtils.getCommonLangText('cancelButton', 'Cancel', lang)

import FormGroup from 'forms/FormGroup';
import FormDateTime from 'forms/FormDateTime';
import FormLabel from 'forms/FormLabel';
import FormItemHOC from 'forms/FormItemHOC';

import './FormDateRange.pcss';

const cnFormDateRange = cn('FormDateRange');

class FormDateRange extends React.PureComponent /** @lends @FormDateRange.prototype */ {

  static propTypes = {
    selectsEnd: PropTypes.bool,
    selectsStart: PropTypes.bool,
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
  };

  // defaultProps = {
  //   timeIntervals: 60,
  // };

  // Lifecycle methods...

  constructor(props) {
    super(props);
    const {
      // value,
      startDate,
      endDate,
      showTime,
      timeIntervals = config.constants.timeIntervals,
      // selectsRange,
    } = props;
    this.id = props.id || props.inputId;
    this.uniqFormId = props.inputId || props.id || formUtils.getUniqFormId({ prefix: 'FormDateRange' }); // identifier for local labels refering to local inputs
    // const dateType = props.dateType || dateUtils.detectDateValueType(startDate || endDate) || defaultDateType;

    // Default date (now)
    this.now = new Date(props.now || Date.now()); // Date.now()

    // Default start date (beginning of the day)
    this.startNow = dateUtils.adjustDateValue(this.now, false, showTime, timeIntervals);
    // this.startNow = new Date(this.now);
    // this.startNow.setHours(0);
    // this.startNow.setMinutes(0);
    // this.startNow.setSeconds(0);
    // this.startNow.setMilliseconds(0);

    // Default end date (end of the day)
    this.endNow = dateUtils.adjustDateValue(this.now, true, showTime, timeIntervals);
    // this.endNow = new Date(this.now);
    // this.endNow.setHours(23);
    // this.endNow.setMinutes(59);
    // this.endNow.setSeconds(59);
    // this.endNow.setMilliseconds(999);

    this.state = {
      // dateType,
      startDate, // : startDate && dateUtils.convertToDateObject(startDate),
      endDate, // : endDate && dateUtils.convertToDateObject(endDate),
    };
    // this.state.displayValue = this.getDisplayValue(this.state);
  }

  // Helper methods...

  getClassName() {
    const { id } = this;
    const {
      fullWidth,
    } = this.props;
    const className = cnFormDateRange({
      id,
      fullWidth, // ???
    }, [this.props.className]);
    return className;
  }

  // Handlers...

  handleChange = (params) => {
    const {
      id,
      value,
      valueObj,
      // displayValue,
    } = params;
    const {
      onChange,
      onStartDateChange,
      onEndDateChange,
    } = this.props;
    const {
      startDate,
      endDate,
    } = this.state;
    const selectedStart = id === 'startDate';
    const stateParams = {
      startDate,
      endDate,
    };
    stateParams[id] = value;
    const cbParams = {
      ...stateParams,
      id: this.id,
      selectedStart,
      valueId: id,
      value,
      valueObj,
    };
    // console.log('FormDateRange:handleChange', {
    //   stateParams,
    //   cbParams,
    // });
    this.setState(stateParams);
    if (typeof onChange === 'function') {
      onChange(cbParams);
    }
    if (selectedStart && typeof onStartDateChange === 'function') {
      onStartDateChange(cbParams);
    }
    if (!selectedStart && typeof onEndDateChange === 'function') {
      onEndDateChange(cbParams);
    }
  }

  // Render...

  render() {
    const {
      id,
      disabled,
      // title,
      // open,
      // fullWidth,
      // setDomRef,
      // language: { components: { lang } },
      // value,
      // placeholder,
      startLabel,
      endLabel,
      startPlaceholder,
      endPlaceholder,
      showTime,
      timeIntervals = config.constants.timeIntervals,
      allowEmpty,
      // // Skip our own parameters from props...
      // [> eslint-disable no-unused-vars <]
      // valueType,
      // className,
      // value: unusedValue,
      // onChange,
      // name,
      // inputId,
      // now,
      // dispatch,
      // [> eslint-enable no-unused-vars <]
      // ...props
    } = this.props;
    const {
      startDate,
      endDate,
    } = this.state;

    const renderProps = {
      className: this.getClassName(),
      disabled,
      flow: true,
      id,
    };

    // console.log('FormDateRange:render', {
    //   startDate,
    //   endDate,
    //   props,
    // });

    const uniqStartId = this.uniqFormId + 'StartDate';
    const uniqEndId = this.uniqFormId + 'EndDate';

    const startLabelText = startLabel; // || 'от'
    const endLabelText = endLabel; // || 'до'

    const startPlaceholderText = startPlaceholder || langUtils.getCommonLangText('from');
    const endPlaceholderText = endPlaceholder || langUtils.getCommonLangText('to');

    const commonProps = {
      // startDate,
      // endDate,
      showTime,
      timeIntervals,
      allowEmpty,
    };
    return (
      <FormGroup {...renderProps}>
        {startLabelText && (<FormLabel
          htmlFor={uniqStartId}
          text={startLabelText}
        />)}
        <FormDateTime
          {...commonProps}
          selectsStart
          name="startDate"
          id="startDate"
          inputId={uniqStartId}
          startDate={startDate}
          endDate={endDate}
          value={startDate}
          placeholder={startPlaceholderText}
          now={this.startNow}
          maxDate={endDate}
          onChange={this.handleChange}
        />
        {endLabelText && (<FormLabel
          htmlFor={uniqEndId}
          text={endLabelText}
        />)}
        <FormDateTime
          {...commonProps}
          selectsEnd
          name="endDate"
          id="endDate"
          inputId={uniqEndId}
          startDate={startDate}
          endDate={endDate}
          value={endDate}
          placeholder={endPlaceholderText}
          now={this.endNow}
          minDate={startDate}
          onChange={this.handleChange}
        />
      </FormGroup>
    );
  }

}

export default FormItemHOC({ solid: true, hoverable: true })(FormDateRange);
