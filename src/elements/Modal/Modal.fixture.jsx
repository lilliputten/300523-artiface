/** @module Modal.fixture
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.24, 18:19
 */
/* eslint-disable react/jsx-max-depth, react/no-multi-comp, no-console */

import React from 'react'

import Modal from './Modal'
import FormGroup from 'forms/FormGroup'
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
      open: true,
    }
    // setTimeout(this.close, 3000)
    // setInterval(this.toggle, 5000)
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  handleOpenState = ({ open }) => this.setState({ open })
  toggle = () => {
    this.modalRef && this.modalRef.toggle()
    // this.setState(({ open }) => {
    //   return { open: !open }
    // })
  }
  setModalRef = (ref) => {
    this.modalRef = ref
  }
  renderActions() {
    return (
      <FormGroup id="Actions" flow fullWidth>
        <FormGroup id="ActionsMain" flow>
          <FormButton
            id="ok"
            icon="faCheck"
            text="Ok"
            theme="primary"
            inline
          />
        </FormGroup>
        <FormGroup id="ActionsRight" flow align="right">
          <FormButton
            id="cancel"
            icon="faTimes"
            text="Cancel"
            inline
          />
        </FormGroup>
      </FormGroup>
    )
  }
  onAction = ({ id }) => {
    console.log('onAction', id)
  }
  render() {
    const { open } = this.state
    const actions = this.renderActions()
    // const isElement = React.isValidElement(actions)
    return (
      <React.Fragment>
        <Modal
          id="simple"
          theme="info"
          // icon="faExclamationCircle"
          open={open}
          className="ModalClass"
          windowClassName="WindowClass"
          wrapperClassName="WrapperClass"
          onAction={this.onAction}
          onClose={this.close}
          onOpen={this.open}
          handleOpenState={this.handleOpenState}
          ref={this.setModalRef}
          actions={actions}
          title="Modal title"
          content="Main content"
          width="sm"
          // leftContent="left" // Left column (with icon visual, eg)
          showCloseButton
          autoClose
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
