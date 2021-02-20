/** @module FormContainer
 *  @class FormContainer
 *  @since 2021.02.20, 16:55
 *  @changed 2021.02.20, 16:56
 */

import React from 'react';
import { cn } from 'utils/configure';

import './FormContainer.pcss';

const cnFormContainer = cn('FormContainer');

const FormContainer = (props) => {
  const {
    children,
    spaced,
  } = props;
  return (
    <div className={cnFormContainer({ spaced })}>
      {children}
    </div>
  );
};

export default FormContainer;
