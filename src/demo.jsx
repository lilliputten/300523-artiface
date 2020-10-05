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
  // FormLabel,
  FormGroup,
  FormButton,
  Hello,
} from './build'

// import Hello from './demo/Hello.jsx'

// Demo app styles
import './demo.pcss'

import FormButtonFixture from 'forms/FormButton/FormButton.fixture'

const placeFicture = (fixture, Wrapper = React.Fragment) => {
  // Wrapper = React.Fragment
  const content = Object.entries(fixture).map(([key, Component]) => {
    return { ...Component, key }
  })
  return (
    <Wrapper>
      {content}
    </Wrapper>
  )
}

const FormButtonFixtureContent = placeFicture(FormButtonFixture)

// console.log(FormButtonFixture, FormButtonFixtureContent)
// debugger

const demoContent = (
  <div className="demo">
    <Hello greeting="Hi" />
    {FormButtonFixtureContent}
    {/*
    <FormGroup>
      <FormButton style="default" className="PassedClassName">
        Default
      </FormButton>
      <FormButton icon={faCheck} style="default">
        With icon
      </FormButton>
    </FormGroup>
    <FormItemDummy icon={faPlus} style="default" className="Demo">
      Test
    </FormItemDummy>
    */}
  </div>
)

render(demoContent, document.getElementById('root'))
