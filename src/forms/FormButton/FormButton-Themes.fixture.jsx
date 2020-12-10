/** @module FormButton.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.21, 22:52
 */

import React from 'react'
import config from 'config'
import FormButton from './FormButton'
import FormGroup from '../FormGroup'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

const defaultIcon = 'faPalette'
const icons = { // Some custom icons
  primary: 'faPlay',
  secondary: 'faPlayCircle',
  error: 'faBolt',
  warn: 'faExclamationCircle',
  success: 'faCheckCircle',
  info: 'faInfoCircle',
  confirm: 'faQuestionCircle',
  select: 'faClipboardCheck',
}

// Create fixture items per color definitions from `config.css.themeColors`
const items = Object.keys(config.css.themeColors).reduce((items, name) => {
  const icon = icons[name] || defaultIcon
  const text = 'Style: ' + name
  const item = <FormButton key={name} icon={icon} theme={name} text={text} />
  return { ...items, [name]: item }
}, {})

export default items

/* // Old (plain fixtures generation method)...
 * export default { // See `config.css.themeColors`
 *   primary: <FormButton icon="faPlay" style="primary" text="Style: primary" />,
 *   secondary: <FormButton icon="faPlayCircle" style="secondary" text="Style: secondary" />,
 *   error: <FormButton icon="faBolt" style="error" text="Style: error" />,
 *   warn: <FormButton icon="faExclamationCircle" style="warn" text="Style: warn" />,
 *   success: <FormButton icon="faCheckCircle" style="success" text="Style: success" />,
 *   info: <FormButton icon="faInfoCircle" style="info" text="Style: info" />,
 *   confirm: <FormButton icon="faQuestionCircle" style="confirm" text="Style: confirm" />,
 *   select: <FormButton icon="faClipboardCheck" style="select" text="Style: select" />,
 *   maroon: <FormButton icon="faPalette" style="maroon" text="Style: maroon" />,
 *   red: <FormButton icon="faPalette" style="red" text="Style: red" />,
 *   purple: <FormButton icon="faPalette" style="purple" text="Style: purple" />,
 *   fuchsia: <FormButton icon="faPalette" style="fuchsia" text="Style: fuchsia" />,
 *   green: <FormButton icon="faPalette" style="green" text="Style: green" />,
 *   // lime: <FormButton icon="faPalette" style="lime" text="Style: lime" />,
 *   olive: <FormButton icon="faPalette" style="olive" text="Style: olive" />,
 *   // yellow: <FormButton icon="faPalette" style="yellow" text="Style: yellow" />,
 *   navy: <FormButton icon="faPalette" style="navy" text="Style: navy" />,
 *   blue: <FormButton icon="faPalette" style="blue" text="Style: blue" />,
 *   teal: <FormButton icon="faPalette" style="teal" text="Style: teal" />,
 *   // aqua: <FormButton icon="faPalette" style="aqua" text="Style: aqua" />,
 *   orange: <FormButton icon="faPalette" style="orange" text="Style: orange" />,
 *   blueviolet: <FormButton icon="faPalette" style="blueviolet" text="Style: blueviolet" />,
 *   brown: <FormButton icon="faPalette" style="brown" text="Style: brown" />,
 *   cadetblue: <FormButton icon="faPalette" style="cadetblue" text="Style: cadetblue" />,
 *   darkblue: <FormButton icon="faPalette" style="darkblue" text="Style: darkblue" />,
 *   darkcyan: <FormButton icon="faPalette" style="darkcyan" text="Style: darkcyan" />,
 *   darkgoldenrod: <FormButton icon="faPalette" style="darkgoldenrod" text="Style: darkgoldenrod" />,
 *   darkorange: <FormButton icon="faPalette" style="darkorange" text="Style: darkorange" />,
 *   darkorchid: <FormButton icon="faPalette" style="darkorchid" text="Style: darkorchid" />,
 *   darkred: <FormButton icon="faPalette" style="darkred" text="Style: darkred" />,
 *   darkslateblue: <FormButton icon="faPalette" style="darkslateblue" text="Style: darkslateblue" />,
 *   darkslategray: <FormButton icon="faPalette" style="darkslategray" text="Style: darkslategray" />,
 * }
 */
