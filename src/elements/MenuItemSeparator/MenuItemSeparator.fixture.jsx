/** @module MenuItemSeparator.fixture
 *  @since 2021.02.20, 14:33
 *  @changed 2021.02.20, 14:33
 */
/* eslint-disable no-console */

import React from 'react';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import MenuItemSeparator from './MenuItemSeparator';

// Demo styles for cosmos engine
import 'demo.pcss';

import './MenuItemSeparator.fixture.pcss';

export default {
  simple: (
    <MenuItemSeparator />
  ),
  inMenu: (
    <Menu id="inMenu">
      <MenuItem text="item" />
      <MenuItem text="item" />
      <MenuItemSeparator />
      <MenuItem text="item" />
    </Menu>
  ),
  inHorizontalMenu: (
    <Menu id="inHorizontalMenu" layout="horizontal">
      <MenuItem text="item" />
      <MenuItem text="item" />
      <MenuItemSeparator />
      <MenuItem text="item" />
    </Menu>
  ),
};
