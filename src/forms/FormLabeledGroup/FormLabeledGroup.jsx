/** @module FormLabeledGroup
 *  @class FormLabeledGroup
 *  @since 2020.05.10, 09:24
 *  @changed 2020.12.10, 16:20
 */

import React from 'react';
// import { cn } from 'utils/configure'

import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

// import './FormLabeledGroup.pcss'

// const cnFormLabeledGroup = cn('FormLabeledGroup')

const FormLabeledGroup = (props) => /** @lends @FormLabeledGroup.prototype */ {
  const {
    className,
    children,
    id,
    fullWidth,
    innerFlex,
    htmlFor,
    // fixed,
    title,
    text,
    flow,
    // ...props
  } = props;
  // const thisClassName = cnFormLabeledGroup({ flow, full })
  return (
    <FormGroup
      className={className}
      fullWidth={fullWidth}
      innerFlex={innerFlex}
      flow={flow}
      id={id}
    >
      <FormLabel
        htmlFor={htmlFor}
        title={title}
        text={text || title + ':'}
        fixed={flow && fullWidth}
        firstInBlock={!flow && fullWidth}
      />
      {children}
    </FormGroup>

  );
};

export default FormLabeledGroup;
