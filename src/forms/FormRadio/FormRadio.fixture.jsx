/** @module FormRadio.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.21, 22:52
 */

import React from 'react'
import FormRadio from './FormRadio'
import FormGroup from '../FormGroup'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

class DemoFormRadio extends React.PureComponent /** @lends @FormRadio.prototype */ {
  constructor(props) {
    super(props)
    this.state = {
      value: true,
    }
  }
  handleChange = ({ /* id, */ value }) => {
    this.setState({ value })
  }
  render() {
    const { value } = this.state
    return (
      <FormRadio
        id="DemoRadio"
        onChange={this.handleChange}
        value={value}
      />
    )
  }
}


export default {
  demo: <DemoFormRadio />,
  // default: <FormRadio className="extraButtonClass" />,
  // checked: <FormRadio value={true} />,
}
