/** @module demo-201005-popper
 *  @desc Custom demo module (use with `npm run -s server -- --env.DEMO_MODULE=demo-201005-popper`)
 *  @since 2020.05.19, 17:16
 *  @changed 2020.11.06, 01:46
 */
/* eslint-disable react/no-multi-comp */

import 'es5-shim/es5-shim'
import 'es5-shim/es5-sham'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

// import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'
// import { Fragment } from 'react'
import { render } from 'react-dom'

// import { injectGlobal } from 'react-emotion'
// import { compose, withState } from 'recompose'
// import { Transition } from 'react-spring/renderprops'
import { Manager, Reference, Popper/* , placements */ } from 'react-popper'

import DatePicker from 'react-datepicker' // @see [GitHub - Hacker0x01/react-datepicker: A simple and reusable datepicker component for React](https://github.com/Hacker0x01/react-datepicker)
// import DatePicker from 'react-datepicker/dist/es'
// import DatePicker from './react-datepicker@3.3.0/src' // Dev.mode

// import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'react-datepicker/dist/react-datepicker.css'

// @see:
// - [wojtekmaj/react-calendar: Ultimate calendar for your React app.](https://github.com/wojtekmaj/react-calendar#readme)
// - [React-Calendar](https://projects.wojtekmaj.pl/react-calendar/)

import Calendar from 'react-calendar'

// import { usePopper } from 'react-popper'

// import * as demoSupport from './demoSupport'

// Demo app styles
import './demo.pcss'

import './demo-201005-popper.pcss'

// import * as build from './build'
import './build'

import 'react-calendar/dist/Calendar.css' // Default styles

function CalendarExample() {
  const [value, onChange] = useState(new Date())
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale="ru-RU"
        selectRange
      />
    </div>
  )
}

const DatePickerExample = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <DatePicker
      selected={startDate}
      onChange={setStartDate}
      // locale="en-US"
    />
  )
}

const PopperExample = () => {
  return (
    <Manager className="test-manager">
      <Reference>
        {({ ref }) => (
          <div ref={ref} className="test-wrapper">
            target
          </div>
        )}
      </Reference>
      <Popper
        // modifiers={popperModifiers}
        // placement={popperPlacement}
        // {...popperProps}
      >
        {({ ref, style, placement/* , arrowProps */ }) => (
          <div
            {...{ ref, style }}
            className="test-popper"
            data-placement={placement}
            // onKeyDown={popperOnKeyDown}
          >
              popper
            {/* React.cloneElement(popperComponent, { arrowProps }) */}
          </div>
        )}
      </Popper>

    </Manager>
  )
}

const demoContent = (
  <div className="demo">
    <div className="demo-Before">before</div>
    <PopperExample />
    <DatePickerExample />
    <CalendarExample />
    <div className="demo-After">after</div>
  </div>
)

render(demoContent, document.getElementById('root'))
