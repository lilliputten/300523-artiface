/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2020.10.06, 21:53
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

const fixtureComponentsList = {
  Hello: require('demo/Hello/Hello.fixture'),
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
  content = demoSupport.FixturesContents(fixtureComponentsList)
}

const demoContent = (
  <div className="demo">
    {content}
  </div>
)

render(demoContent, document.getElementById('root'))
