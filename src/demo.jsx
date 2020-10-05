/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2020.10.05, 20:31
 */

import 'es5-shim/es5-shim'
import 'es5-shim/es5-sham'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import { render } from 'react-dom'

import {
  PlaceFixture,
  FixturesContents,
} from './demoSupport'

// Demo app styles
import './demo.pcss'

const fixtureComponentsList = {
  Hello: require('demo/Hello/Hello.fixture'),
  FormButton: require('forms/FormButton/FormButton.fixture'),
  FormGroup: require('forms/FormGroup/FormGroup.fixture'),
}

const findFixture = window.location.search && window.location.search.match(/\bfixture=([^&]+)/)
const fixtureId = findFixture && findFixture[1]
const fixtureModuleExports = fixtureComponentsList[fixtureId]

let content

if (fixtureModuleExports) { // Fixture specified
  const {
    default: fixture,
    demoTitle = 'Demo fixture: ' + fixtureId,
    DemoWrapper,
  } = fixtureModuleExports
  content = PlaceFixture({ fixture, demoTitle, DemoWrapper })
}
else { // List available fixtures to display
  content = FixturesContents(fixtureComponentsList)
}

const demoContent = (
  <div className="demo">
    {content}
    {/*
    <Hello greeting="Hi" />
    <FixtureInfo text="FormButtonFixture" />
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
