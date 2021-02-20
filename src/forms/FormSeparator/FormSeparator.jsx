/** @module FormSeparator
 *  @class FormSeparator
 *  @since 2021.02.20, 13:40
 *  @changed 2021.02.20, 13:40
 */

import React from 'react';
import { cn } from 'utils/configure';

import './FormSeparator.pcss';

const FormSeparator = (props) => {
  const { id } = props;
  const className = cn('FormSeparator')({ id }, [props.className, 'FormItem']);
  return (
    <div className={className} />
  );
};

export default FormSeparator;
