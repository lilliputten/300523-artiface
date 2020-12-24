/** @module Modal.fixture
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.24, 18:19
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
      show: true,
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
  renderActions() {
    return (
      <FormButton
        id="ok"
        icon="faCheck"
        text="Ok"
        theme="primary"
        inline
      />
    )
  }
  render() {
    const { show } = this.state
    const actions = this.renderActions()
    // const isElement = React.isValidElement(actions)
    return (
      <React.Fragment>
        <Modal
          id="simple"
          icon="FaCheck"
          show={show}
          className="ModalClass"
          windowClassName="WindowClass"
          wrapperClassName="WrapperClass"
          onClose={this.hide}
          onOpen={this.open}
          ref={this.setModalRef}
          actions={actions}
          title="Modal title"
          content="Main content"
          theme="error"
          width="md"
          // leftContent="left" // Left column (with icon visual, eg)
          showCloseButton
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
