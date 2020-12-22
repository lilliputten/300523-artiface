/** @module Modal.fixture
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.21, 22:58
 */
/* eslint-disable react/no-multi-comp, no-console */

import React from 'react'

import Modal from './Modal'
// import FormGroup from 'forms/FormGroup'
// import FormButton from 'forms/FormButton'
// import Menu from 'elements/Menu'

// Demo styles for cosmos engine
import 'demo.pcss'

import './Modal.fixture.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

class Simple extends React.PureComponent /** @lends @PopupsContainer.prototype */ {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
    setTimeout(() => {
      this.setState({ show: false })
    }, 6000)
  }
  render() {
    const { show } = this.state
    return (
      <Modal
        id="simple"
        show={show}
      >
        <div className="simpleContainer">
          <div className="simpleStub">simpleStub</div>
        </div>
      </Modal>
    )
  }
}
const simple = <Simple />
/*
 * const simple = (
 *   <Modal
 *     id="simple"
 *   >
 *     <div className="simpleContainer">
 *       <div className="simpleStub">simpleStub</div>
 *     </div>
 *   </Modal>
 * )
 */

export default {
  simple,
}
