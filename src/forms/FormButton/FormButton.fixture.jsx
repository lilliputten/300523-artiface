import React from 'react'
import FormButton from './FormButton'

import 'demo.pcss'

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

export default {
  default: <FormButton style="default" text="Default" />,
  defaultWithIcon: <FormButton icon={faCheck} style="default" text="Default with icon" />,
}
