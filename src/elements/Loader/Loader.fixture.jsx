/** @module Loader.fixture
 *  @since 2020.12.24, 22:38
 *  @changed 2020.12.24, 22:38
 */
/* eslint-disable no-console */

import React from 'react';
import Loader from './Loader';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './Loader.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {

const onCancel = (event) => {
  console.log('onCancel', event);
};

export default {
  // modeInplace: (
  //   <div className="LoaderDemoWrapper">
  //     <Loader
  //       mode="inplace"
  //       theme="MediumDark"
  //       text="MediumDark, inplace"
  //       show
  //     />
  //   </div>
  // ),
  // modeBlock: ( // Full page
  //   <div className="LoaderDemoWrapper">
  //     <Loader
  //       mode="block"
  //       theme="Dark"
  //       text="Dark, block (full-page)"
  //       show
  //     />
  //   </div>
  // ),
  themeLight: (
    <div className="LoaderDemoWrapper">
      <Loader
        mode="local"
        theme="Light"
        text="Light"
        show
      />
    </div>
  ),
  themeMediumDark: (
    <div className="LoaderDemoWrapper">
      <Loader
        mode="local"
        theme="MediumDark"
        text="MediumDark"
        show
      />
    </div>
  ),
  themeDark: (
    <div className="LoaderDemoWrapper">
      <Loader
        mode="local"
        theme="Dark"
        text="Dark"
        show
      />
    </div>
  ),
  themeOpaqueLight: (
    <div className="LoaderDemoWrapper">
      <Loader
        mode="local"
        theme="OpaqueLight"
        text="OpaqueLight"
        show
      />
    </div>
  ),
  themeOpaqueMediumDark: (
    <div className="LoaderDemoWrapper">
      <Loader
        mode="local"
        theme="OpaqueMediumDark"
        text="OpaqueMediumDark"
        show
      />
    </div>
  ),
  themeOpaqueDark: (
    <div className="LoaderDemoWrapper">
      <Loader
        mode="local"
        theme="OpaqueDark"
        text="OpaqueDark"
        show
      />
    </div>
  ),
  canceable: (
    <div className="LoaderDemoWrapper">
      <Loader
        mode="local"
        theme="Dark"
        text="canceable"
        onCancel={onCancel}
        show
      />
    </div>
  ),
};
