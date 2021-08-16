/** @module ModalWindow.fixture
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.24, 18:19
 */
/* eslint-disable react/jsx-max-depth, react/no-multi-comp, no-console, no-debugger */

import React from 'react';

import ModalWindow from './ModalWindow';
import FormGroup from 'forms/FormGroup';
import FormButton from 'forms/FormButton';
import FormSelect from 'forms/FormSelect';
import FormTextInput from 'forms/FormTextInput';
import Menu from 'elements/Menu';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './ModalWindow.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {

// Interactive modal (self-closing)
class Interactive extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // open: true,
      // loading: true,
    };
    // setTimeout(this.close, 3000)
    // setInterval(this.toggle, 5000)
  }
  open = () => this.setState({ open: true, loading: true })
  close = () => this.setState({ open: false })
  handleOpenState = ({ open }) => this.setState({ open })
  toggle = () => {
    this.modalRef && this.modalRef.toggle();
    // this.setState(({ open }) => {
    //   return { open: !open }
    // })
  }
  setModalWindowRef = (ref) => {
    this.modalRef = ref;
  }
  handleLoaderCancel = () => {
    console.log('ModalWindow.fixture:handleLoaderCancel');
    this.setState(({ loading }) => ({ loading: !loading }));
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
            plain
            inline
          />
        </FormGroup>
      </FormGroup>
    );
  }
  onAction = ({ id }) => {
    console.log('ModalWindow.fixture:onAction', id);
  }
  render() {
    const { open } = this.state;
    const actions = this.renderActions();
    // const isElement = React.isValidElement(actions)
    return (
      <React.Fragment>
        <ModalWindow
          id="simple"
          theme="info"
          // icon="faExclamationCircle"
          open={open}
          className="ModalWindowClass"
          windowClassName="WindowClass"
          wrapperClassName="WrapperClass"
          onAction={this.onAction}
          onClose={this.close}
          onOpen={this.open}
          handleOpenState={this.handleOpenState}
          ref={this.setModalWindowRef}
          actions={actions}
          title="Interactive"
          windowWidth="sm"
          // leftContent="left" // Left column (with icon visual, eg)
          showCloseButton
          autoClose
          useLoader
          loading={this.state.loading}
          // loaderTheme="Dark"
          handleLoaderCancel={this.handleLoaderCancel}
        >
          <div className="simpleContainer">
            <div className="simpleStub">simpleStub</div>
          </div>
        </ModalWindow>
        <FormButton
          text="Toggle Interactive"
          onClick={this.toggle}
          inline
        />
      </React.Fragment>
    );
  }
}
const interactive = <Interactive />;

const demoOptions = [
  { val: 1, text: 'Ruinning' },
  { val: 2, text: 'Swimming extra long text item name string value' },
];

class WithSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loading: false, // Use `useLoader` for ability to controlling Loader
    };
    // setTimeout(this.close, 3000)
    // setInterval(this.toggle, 5000)
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  handleOpenState = ({ open }) => this.setState({ open })
  toggle = () => {
    this.modalRef && this.modalRef.toggle();
    // this.setState(({ open }) => {
    //   return { open: !open }
    // })
  }
  setModalWindowRef = (ref) => {
    this.modalRef = ref;
  }
  handleLoaderCancel = () => {
    console.log('ModalWindow.fixture:handleLoaderCancel');
    this.setState(({ loading }) => ({ loading: !loading }));
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
    );
  }
  onAction = ({ id }) => {
    console.log('ModalWindow.fixture:onAction', id);
  }
  render() {
    const { open } = this.state;
    const actions = this.renderActions();
    // const isElement = React.isValidElement(actions)
    return (
      <React.Fragment>
        <ModalWindow
          id="simple"
          theme="info"
          // icon="faExclamationCircle"
          open={open}
          className="ModalWindowClass"
          contentClassName="XXX"
          windowClassName="WindowClass"
          wrapperClassName="WrapperClass"
          onAction={this.onAction}
          onClose={this.close}
          onOpen={this.open}
          handleOpenState={this.handleOpenState}
          ref={this.setModalWindowRef}
          actions={actions}
          title="WithSelect"
          windowWidth="sm"
          // leftContent="left" // Left column (with icon visual, eg)
          showCloseButton
          autoClose
          useLoader
          loading={this.state.loading}
          // loaderTheme="Dark"
          handleLoaderCancel={this.handleLoaderCancel}
        >
          <div className="simpleContainer">
            <FormSelect
              id="DemoSelect"
              title="Select title"
              text="Select"
              options={demoOptions}
              // closeOnSelect
              // open
            />
          </div>
        </ModalWindow>
        <FormButton
          text="Toggle WithSelect"
          onClick={this.toggle}
          inline
        />
      </React.Fragment>
    );
  }
}
const withSelect = <WithSelect />;

class WithInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
      // loading: true, // Use `useLoader` for ability to controlling Loader
    };
    // setTimeout(this.close, 3000)
    // setInterval(this.toggle, 5000)
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  handleOpenState = ({ open }) => this.setState({ open })
  toggle = () => {
    this.modalRef && this.modalRef.toggle();
  }
  setModalWindowRef = (ref) => {
    this.modalRef = ref;
  }
  handleLoaderCancel = () => {
    console.log('ModalWindow.fixture:handleLoaderCancel');
    this.setState(({ loading }) => ({ loading: !loading }));
  }
  onChange = ({ value }) => {
    // console.log('withInput:onChange', value)
    this.setState({ value });
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
    );
  }
  onAction = ({ id }) => {
    console.log('ModalWindow.fixture:onAction', id);
  }
  render() {
    const { value, open } = this.state;
    // console.log('withInput:render', value);
    const actions = this.renderActions();
    // const isElement = React.isValidElement(actions)
    return (
      <React.Fragment>
        <ModalWindow
          id="simple"
          theme="info"
          // icon="faExclamationCircle"
          open={open}
          className="ModalWindowClass"
          contentClassName="XXX"
          windowClassName="WindowClass"
          wrapperClassName="WrapperClass"
          onAction={this.onAction}
          onClose={this.close}
          onOpen={this.open}
          handleOpenState={this.handleOpenState}
          ref={this.setModalWindowRef}
          actions={actions}
          title="WithInput"
          windowWidth="sm"
          // leftContent="left" // Left column (with icon visual, eg)
          showCloseButton
          autoClose
          useLoader
          loading={this.state.loading}
          // loaderTheme="Dark"
          handleLoaderCancel={this.handleLoaderCancel}
        >
          <FormTextInput value={value} onChange={this.onChange} id="TestInput" fullWidth />
        </ModalWindow>
        <FormButton
          text="Toggle WithInput"
          onClick={this.toggle}
          inline
        />
      </React.Fragment>
    );
  }
}
const withInput = <WithInput />;

const menuItems = [
  {
    id: 'selectValue',
    val: 1,
    text: 'Variant 1',
    data: { key: 'var.1' }, // Data passed to event
  },
  {
    id: 'selectValue',
    val: 2,
    text: 'Variant 2',
    data: { key: 'var.2' }, // Data passed to event
  },
];
class WithMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      value: '',
      // loading: true, // Use `useLoader` for ability to controlling Loader
    };
    // setTimeout(this.close, 3000)
    // setInterval(this.toggle, 5000)
  }
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })
  handleOpenState = ({ open }) => this.setState({ open })
  toggle = () => {
    this.modalRef && this.modalRef.toggle();
  }
  setModalWindowRef = (ref) => {
    this.modalRef = ref;
  }
  handleLoaderCancel = () => {
    console.log('ModalWindow.fixture:handleLoaderCancel');
    this.setState(({ loading }) => ({ loading: !loading }));
  }
  onChange = ({ value }) => {
    // console.log('withMenu:onChange', value)
    this.setState({ value });
  }
  onChildAction = (params) => {
    const { id } = params;
    console.log('ModalWindow.fixture:onChildAction', id, params);
    debugger;
  }
  onAction = (params) => {
    const { id } = params;
    console.log('ModalWindow.fixture:onAction', id, params);
    debugger;
  }
  onOk = ({ id }) => {
    console.log('ModalWindow.fixture:onOk', id);
    debugger;
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
    );
  }
  renderContent() {
    return (
      <Menu
        id="menu1"
        selectable
        singleChoice
        // checkedItemTheme="primary"
        itemTheme="primary"
      >
        {menuItems}
      </Menu>
    );
  }
  render() {
    const { open } = this.state;
    // console.log('withMenu:render', value);
    const actions = this.renderActions();
    // const isElement = React.isValidElement(actions)
    return (
      <React.Fragment>
        <ModalWindow
          id="simple"
          theme="info"
          // icon="faExclamationCircle"
          open={open}
          className="ModalWindowClass"
          contentClassName="XXX"
          windowClassName="WindowClass"
          wrapperClassName="WrapperClass"
          onChildAction={this.onChildAction}
          onAction={this.onAction}
          onOk={this.onOk} // Custom handlers
          onClose={this.close}
          onOpen={this.open}
          handleOpenState={this.handleOpenState}
          ref={this.setModalWindowRef}
          actions={actions}
          title="WithMenu"
          windowWidth="sm"
          // leftContent="left" // Left column (with icon visual, eg)
          showCloseButton
          autoClose
          useLoader
          loading={this.state.loading}
          // loaderTheme="Dark"
          handleLoaderCancel={this.handleLoaderCancel}
        >
          {this.renderContent()}
        </ModalWindow>
        <FormButton
          text="Toggle WithMenu"
          onClick={this.toggle}
          inline
        />
      </React.Fragment>
    );
  }
}
const withMenu = <WithMenu />;

// Non interactive: without controller
const simple = (
  <ModalWindow
    error={['error 1', 'error2']}
    id="simple"
    // open
  >
    <div className="simpleContainer">
      <div className="simpleStub">simpleStub</div>
    </div>
  </ModalWindow>
);

export default {
  simple,
  interactive,
  withSelect,
  withInput,
  withMenu,
};
