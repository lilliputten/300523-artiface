/** @module FormDelim
 *  @class FormDelim
 *  @since 2020.11.27, 12:52
 *  @changed 2020.11.27, 12:52
 */

import React from 'react'
import { cn } from '@bem-react/classname'

import './FormDelim.pcss'

const FormDelim = (props) => {
  const { id } = props
  const className = cn('FormDelim')({ id }, [props.className])
  return (
    <div className={className} />
  )
}

export default FormDelim
