/** @module Modal.fixture
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.21, 22:58
 */
/* eslint-disable react/jsx-max-depth, react/no-multi-comp, no-console */

import React from 'react'

import Modal from './Modal'
// import FormGroup from 'forms/FormGroup'
import FormButton from 'forms/FormButton'
// import Menu from 'elements/Menu'

// Demo styles for cosmos engine
import 'demo.pcss'

import './Modal.fixture.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

// Interactive modal (self-closing)
class Simple extends React.PureComponent /** @lends @PopupsContainer.prototype */ {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    // setTimeout(this.hide, 3000)
    // setInterval(this.toggle, 5000)
  }
  show = () => this.setState({ show: true })
  hide = () => this.setState({ show: false })
  toggle = () => {
    this.modalRef && this.modalRef.toggle()
    // this.setState(({ show }) => {
    //   return { show: !show }
    // })
  }
  setModalRef = (ref) => {
    this.modalRef = ref
  }
  render() {
    const { show } = this.state
    return (
      <React.Fragment>
        <Modal
          id="simple"
          show={show}
          className="ModalClass"
          windowClassName="WindowClass"
          wrapperClassName="WrapperClass"
          onClose={this.hide}
          onOpen={this.open}
          ref={this.setModalRef}
        >
          <div className="simpleContainer">
            <div className="simpleStub">simpleStub</div>
          </div>
        </Modal>
        <FormButton
          text="Toggle"
          onClick={this.toggle}
          inline
        />
      </React.Fragment>
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
