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
  // faPlus,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { // Demo components
  // config,
  // FormItemDummy,
  FormButton,
  Hello,
} from './build'

// import Hello from './demo/Hello.jsx'

// Demo app styles
import './demo.pcss'

const demoContent = (
  <div className="demo">
    <Hello />
    <FormButton icon={faCheck} style="default" className="Demo">
      Test
    </FormButton>
    {/*
    <FormItemDummy icon={faPlus} style="default" className="Demo">
      Test
    </FormItemDummy>
    */}
  </div>
)

render(demoContent, document.getElementById('root'))
