/** @module FormSelect.test
 *  @since 2021.08.16, 11:32
 *  @changed 2021.08.16, 11:32
 *  @jest-environment jsdom
 */
/* eslint-disable no-debugger, no-console */

import React from 'react';
// import * as ReactDOM from 'react-dom';
import {
  render,
  // fireEvent,
} from '@testing-library/react';
import {
  configure,
  mount,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import sinon from 'sinon';

// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { components } from 'i18n/languages'; // Used for mock store

import FormSelect from './FormSelect';

// const mockStore = configureStore([]);
// const languageComponents = components[0]; // [0]: en-US, [1]: ru-RU

configure({ adapter: new Adapter() });

const demoOptions = [
  { val: 1, text: 'Ruinning' },
  { val: 2, text: 'Swimming extra long text item name string value' },
];

describe('FormSelect', () => {
  it('renders component', () => {
    render(
      <FormSelect
        title="Select title"
        text="Select"
        options={demoOptions}
        selected={[1]}
        // onChange={demoChange}
        itemTheme="primary"
      />
    );
  });
  it('update selected prop', () => {
    const component = (
      <FormSelect
        title="Select title"
        text="Select"
        options={demoOptions}
        selected={[1]}
        // onChange={demoChange}
        itemTheme="primary"
      />
    );
    // let wrapper = mount(component);
    const wrapper = mount(shallow(component).get(0));
    // Assert that `wrapper` has updated its state in response to a prop change
    wrapper.setProps({ selected: [2] });
    expect(wrapper.state().selected).toStrictEqual([2]);
  });
  /* it('Component should call componentWillReceiveProps on update (using sinon)', () => {
   *   const spy = sinon.spy(Component.prototype, 'componentWillReceiveProps');
   *   const wrapper = shallow(<Component {...props} />);
   *   expect(spy.calledOnce).to.equal(false);
   *   wrapper.setProps({ prop: 2 });
   *   expect(spy.calledOnce).to.equal(true);
   * });
   */
});
