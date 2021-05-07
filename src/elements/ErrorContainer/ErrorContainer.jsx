/** @module ErrorContainer
 *  @desc Displays error messages
 *  @since 2021.05.07, 14:10
 *  @changed 2021.05.07, 14:10
 */

import React, { PureComponent } from 'react';
// import { cn } from '@bem-react/classname';
import { cn } from 'utils/configure';
import * as strings from 'utils/strings';

import './ErrorContainer.pcss';

const cnErrorContainer = cn('ErrorContainer');

class ErrorContainer extends PureComponent {

  getErrorContent(error) {
    // const _origError = error;
    if (Array.isArray(error)) {
      error = error.map(this.getErrorContent, this);
    }
    else if (typeof error !== 'object' || !React.isValidElement(error)) { // If not react element...
      // ...prepare text...
      if (error instanceof Error && error.message) {
        error = error.message;
      }
      if (error && typeof error !== 'string') {
        error = String(error);
      }
      if (!error) { // Default message
        error = 'Undefined error'; // TODO: To get error text from languages
      }
      // TODO: To process html text?
      // `strings.html2string`?
      error = strings.splitMultiline(error);
    }
    return error;
  }

  render() {
    const errors = this.props.error || this.props.message || this.props.children;
    if (errors) {
      console.error('ErrorContainer: error', errors); // eslint-disable-line no-console
      // debugger; // eslint-disable-line no-debugger
    }
    const error = this.getErrorContent(errors);
    const className = cnErrorContainer(null, [this.props.className]); // null, ['col-12 bg-danger p-2 mt-2 text-light']);
    return (
      <div className={className}>
        {error}
      </div>
    );
  }
}

export default ErrorContainer;
