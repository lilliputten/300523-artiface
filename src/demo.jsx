/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2020.10.07, 00:11
 */

import 'es5-shim/es5-shim'
import 'es5-shim/es5-sham'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import { render } from 'react-dom'

import * as demoSupport from './demoSupport'

// Demo app styles
import './demo.pcss'

import './build'

const fixtureComponentsList = {
  Hello: require('demo/Hello/Hello.fixture'),
  InlineIcon: require('elements/InlineIcon/InlineIcon.fixture'),
  FormLabel: require('forms/FormLabel/FormLabel.fixture'),
  FormTextInput: require('forms/FormTextInput/FormTextInput.fixture'),
  FormButton: require('forms/FormButton/FormButton.fixture'),
  FormGroup: require('forms/FormGroup/FormGroup.fixture'),
}

const findFixture = window.location.search && window.location.search.match(/\bfixture=(([^&:]+)(?::([^&]+))?)/)
// const fullFixtureId = findFixture && findFixture[1]
const fixtureId = findFixture && findFixture[2]
const fixtureItemId = findFixture && findFixture[3]
const fixtureModuleExports = fixtureComponentsList[fixtureId]

let content

if (fixtureModuleExports) { // Fixture specified
  const {
    default: fixture,
    demoTitle = 'Demo fixture: ' + fixtureId, // fullFixtureId,
    DemoWrapper,
  } = fixtureModuleExports
  content = demoSupport.PlaceFixture({ fixture, fixtureItemId, demoTitle, DemoWrapper })
}
else { // List available fixtures to display
  const fixtures = demoSupport.FixturesContents(fixtureComponentsList)
  content = (
    <div className="demoIndex">
      <h3 className="demoIndex-Title">Available fixtures</h3>
      {fixtures}
      <h3 className="demoIndex-Title">Available demos</h3>
      (TODO)
      <p className="demoIndex-Comment">TODO: Navigation, styles</p>
    </div>
  )
}

const demoContent = (
  <div className="demo">
    {content}
  </div>
)

render(demoContent, document.getElementById('root'))
