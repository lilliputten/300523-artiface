/** @module FormSelect.test
 *  @since 2021.08.16, 11:32
 *  @changed 2021.08.16, 11:32
 *  @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { components } from 'i18n/languages'; // Used for mock store

import FormSelect from './FormSelect';

// const mockStore = configureStore([]);
// const languageComponents = components[0]; // [0]: en-US, [1]: ru-RU

describe('FormSelect', () => {
  test('renders component', () => {
    render(
      <FormSelect />
    );
  });
});
