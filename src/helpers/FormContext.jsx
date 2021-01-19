/** @module FormContext
 *  @class FormContext
 *  @since 2021.01.19, 15:23
 *  @changed 2021.01.19, 16:08
 */

import React from 'react';

export const FormContext = React.createContext();

export const FormContextProvider = FormContext.Provider;
export const FormContextConsumer = FormContext.Consumer;

export const withFormContext = (WrappedComponent) => function withFormContext(props) {
  return (
    <FormContextConsumer>
      {form => {
        return (
          <WrappedComponent {...props} formContextNode={form} />
        );
      }}
    </FormContextConsumer>
  );
};
