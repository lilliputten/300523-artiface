/** @module FormButton.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.12.08, 13:35
 */

import React from 'react'
import FormButton from './FormButton'
import FormGroup from '../FormGroup'
import InlineIcon from 'elements/InlineIcon'

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = ({ children }) => {
  return (
    <FormGroup className="darkBackground" id="Dark">
      {children}
    </FormGroup>
  )
}

const inlineIcon = <InlineIcon icon={faCheck} className="extraIconClass" />

export default {
  default: <FormButton icon={inlineIcon} style="default" text="Compare with default" />,
  plain: <FormButton icon={inlineIcon} style="plain" onDark text="Style: plain" />,
  dark: <FormButton icon={inlineIcon} style="default" onDark text="Style: default, onDark" />,
}
