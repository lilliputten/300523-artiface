/** @module FormLabeledGroup
 *  @class FormLabeledGroup
 *  @since 2020.05.10, 09:24
 *  @changed 2021.07.08, 17:09
 */

import React from 'react';
// import { cn } from 'utils/configure'

import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

// import './FormLabeledGroup.pcss'

// const cnFormLabeledGroup = cn('FormLabeledGroup')

const FormLabeledGroup = (props) => /** @lends @FormLabeledGroup.prototype */ {
  const {
    children,
    htmlFor,
    title,
    text,
    // Group props (sync with `FormGroup.jsx` module's propTypes and` `classNameModifiers`:
    align,
    alignItems,
    // autoSize,
    className,
    content,
    disabled,
    flow,
    fullWidth,
    id,
    noSpace,
    noWrap,
    padded,
    separated,
    shaded,
    spaced,
    stack,
    withContainer,
    wrap,
  } = props;
  // const thisClassName = cnFormLabeledGroup({ flow, full })
  const groupProps = {
    align,
    alignItems,
    // autoSize,
    className,
    content,
    disabled,
    flow,
    fullWidth,
    id,
    noSpace,
    noWrap,
    padded,
    separated,
    shaded,
    spaced,
    stack,
    withContainer,
    wrap,
  };
  return (
    <FormGroup {...groupProps}>
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
