/** @module MenuItemSeparator
 *  @class MenuItemSeparator
 *  @since 2021.02.20, 14:33
 *  @changed 2021.02.20, 14:33
 */

import React from 'react';
import { cn } from 'utils/configure';

import './MenuItemSeparator.pcss';

const cnMenuItemSeparator = cn('MenuItemSeparator');

const MenuItemSeparator = (props) => {
  return (
    <div className={cnMenuItemSeparator(null, [props.className])} />
  );
};

export default MenuItemSeparator;
