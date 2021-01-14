/** @module FormRadio.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.21, 22:52
 */

import React from 'react';
import FormRadio from './FormRadio';
import FormGroup from '../FormGroup';

// Demo styles for cosmos engine
import 'demo.pcss';

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
  setRef = (node) => {
    node && typeof node.focus === 'function' && node.focus();
  }
  render() {
    const { value } = this.state;
    return (
      <FormRadio
        id="DemoRadio"
        onChange={this.handleChange}
        value={value}
        ref={this.setRef}
      />
    );
  }
}

export default {
  default: <FormRadio className="extraButtonClass" />,
  primaryChecked: <FormRadio value={true} theme="primary" />,
  demoWithState: <DemoFormRadio />,
};
