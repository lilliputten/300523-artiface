/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2021.02.15, 18:05
 */
/* eslint-disable react/jsx-max-depth */

import 'es5-shim/es5-shim';
import 'es5-shim/es5-sham';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import { render } from 'react-dom';

import * as demoSupport from './demoSupport';

// import * as build from './build'
import WebUiCoreRoot from './build';

// Demo app styles
import './demo.pcss';

import demoFixtures from './demoFixtures';

function getFixtureContent() {
  const search = window.location.search;
  const findFixture = search && search.match(/\bfixture=(([^&:]+)(?::([^&]+))?)/);
  // const fullFixtureId = findFixture && findFixture[1]
  const fixtureId = findFixture && findFixture[2];
  const fixtureItemId = findFixture && findFixture[3];
  const fixtureModuleExports = fixtureId && demoFixtures[fixtureId];

  let content;

  if (fixtureModuleExports) { // Found fixture
    const {
      default: fixture,
      demoTitle = 'Demo fixture: ' + fixtureId, // fullFixtureId,
      DemoWrapper,
    } = fixtureModuleExports;
    content = demoSupport.PlaceFixture({ fixtureId, fixture, fixtureItemId, demoTitle, DemoWrapper });
  }
  else if (fixtureId) { // Fixture specified but not found!
    content = 'Fixture for id "' + fixtureId + '" not found!';
  }
  else { // List all available fixtures to display
    const fixtures = demoSupport.FixturesContents(demoFixtures);
    content = (
      <div className="demoIndex">
        <h3 className="demoIndex-Title">Available fixtures</h3>
        {fixtures}
        <h3 className="demoIndex-Title">Available demos</h3>
        (TODO)
        <p className="demoIndex-Comment">TODO: Navigation, styles, hierarchical components structure</p>
      </div>
    );
  }

  return content;
}

const content = getFixtureContent();

const demoContent = (
  <WebUiCoreRoot autoModalsContainer>
    <div className="demo">
      {content}
    </div>
  </WebUiCoreRoot>
);

render(demoContent, document.getElementById('Root'));
