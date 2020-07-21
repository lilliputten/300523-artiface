/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2020.05.27, 22:58
 */

import 'es5-shim/es5-shim'
import 'es5-shim/es5-sham'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import { render } from 'react-dom'

// import { cn } from '@bem-react/classname'

// import { // Icons (regular)...
// } from '@fortawesome/free-regular-svg-icons'
import { // Icons (solid)...
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  // config,
  FormItemDummy,
  Hello,
} from './build'

// import Hello from './demo/Hello.jsx'

// console.log(config.userAgent, FormItemDummy)
// debugger

// Demo app styles
import './demo.pcss'

const demoContent = (
  <div className="demo">
    <Hello />
    <FormItemDummy icon={faPlus} style="default" className="DemoTest" focusable={false} >
      Test
    </FormItemDummy>
  </div>
)

render(demoContent, document.getElementById('root'))
