/** @module FormSpacer
 *  @class FormSpacer
 *  @since 2020.11.27, 12:52
 *  @changed 2021.07.26, 11:54
 */

import React from 'react';
import { cn } from 'utils/configure';

import './FormSpacer.pcss';

const FormSpacer = (props) => {
  const { id, size } = props;
  const className = cn('FormSpacer')({ id, size }, [props.className]);
  return (
    <div className={className} />
  );
};

export default FormSpacer;
