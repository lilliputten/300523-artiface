/** @module FormSpacer
 *  @class FormSpacer
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */

import React from 'react'
import { cn } from 'utils/configure'

import './FormSpacer.pcss'

const FormSpacer = (props) => {
  const { id } = props
  const className = cn('FormSpacer')({ id }, [props.className])
  return (
    <div className={className} />
  )
}

export default FormSpacer
