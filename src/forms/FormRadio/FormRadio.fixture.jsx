/** @module FormRadio.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.21, 22:52
 */

import React from 'react';
import FormRadio from './FormRadio';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormTextInput from '../FormTextInput';

import { FormContextProvider } from 'helpers/FormContext';

// Demo styles for cosmos engine
// import 'demo.pcss';

export const DemoWrapper = FormGroup; // ({ children }) => {

class DemoFormRadio extends React.PureComponent /** @lends @FormRadio.prototype */ {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
    };
  }
  handleChange = ({ /* id, */ value }) => {
    this.setState({ value });
  }
  setDomRef = (node) => {
    node && typeof node.focus === 'function' && node.focus();
  }
  setFormItemNodeRef = (node) => {
    node && typeof node.focus === 'function' && node.focus();
  }
  render() {
    const { value } = this.state;
    return (
      <FormRadio
        id="DemoRadio"
        onChange={this.handleChange}
        value={value}
        // setDomRef={this.setDomRef}
        setFormItemNodeRef={this.setFormItemNodeRef}
      />
    );
  }
}

class WithFormContext extends React.PureComponent /** @lends @ModalsContainer.prototype */ {
  onInputEnterPressed = ({ id }) => {
    console.log('FormRadio.fixture:onInputEnterPressed', id); // eslint-disable-line no-console
    debugger; // eslint-disable-line no-debugger
  }
  render() {
    return (
      <FormContextProvider value={this}>
        <FormRadio
          className="WithFormContext"
          id="WithFormContext"
          // onChange={this.handleChange}
          // value={value}
          // ref={this.setDomRef}
        />
      </FormContextProvider>
    );
  }
}
const wrappedWithFormContext = <WithFormContext />;

const withLabel = (
  <FormGroup flow>
    <FormRadio
      inputId="withLabelRadio"
      // onChange={this.handleFilterChange}
    />
    <FormLabel htmlFor="withLabelRadio"
      title="Label"
    />
    <FormTextInput
      value="text value"
      placeholder="placeholder"
      // fullWidth
    />
  </FormGroup>
);

export default {
  simple: <FormRadio className="extraButtonClass" />,
  primaryChecked: <FormRadio value={true} theme="primary" />,
  demoWithState: <DemoFormRadio />,
  wrappedWithFormContext,
  withLabel,
};
