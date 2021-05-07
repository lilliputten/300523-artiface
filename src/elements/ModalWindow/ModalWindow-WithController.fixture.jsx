/** @module ModalWindow-WithController.fixture
 *  @since 2021.05.07, 13:04
 *  @changed 2021.05.07, 13:04
 */
/* eslint-disable react/jsx-max-depth, react/no-multi-comp, no-console */

import React from 'react';

import ModalWindow from './ModalWindow';
import FormGroup from 'forms/FormGroup';
import FormActions from 'forms/FormActions';
import FormText from 'forms/FormText';
import FormButton from 'forms/FormButton';
// import FormSelect from 'forms/FormSelect';
// import FormTextInput from 'forms/FormTextInput';
// import Menu from 'elements/Menu'

import config from 'config';

import * as dates from 'utils/dates';

// Demo styles for cosmos engine
// import 'demo.pcss';

// import './ModalWindow-WithController.fixture.pcss';

// export const DemoWrapper = FormGroup; // ({ children }) => {
export const DemoWrapper = <FormGroup flow wrap />; // ({ children }) => {

const onAction = (params) => {
  console.log('ModalWindow-WithController.fixture:onAction', params);
};

const onTest = (params) => {
  const { id: actionId } = params;
  const ModalsController = config.modals.controller;
  const dateStr = dates.formatDateTimeToString(new Date(), { showTime: true });
  const newContent = 'Test: ' + dateStr;
  console.log('ModalWindow-WithController.fixture:onTest', {
    actionId,
    ModalsController,
    newContent,
  });
  debugger;
  ModalsController.updateProxyModal(controlledModalId, {
    children: newContent,
  });
  return false; // Don't close window
};

const controlledModalActions = (
  <FormActions id="Actions" flow fullWidth>
    <FormGroup id="ActionsMain" flow>
      <FormButton
        id="ok"
        icon="faCheck"
        text="Ok"
        theme="primary"
        inline
      />
      <FormButton
        id="Test"
        icon="faExclamationCircle"
        text="Test"
        theme="primary"
        onClick={onTest}
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
  </FormActions>
);

const controlledModalId = 'testModal';
const controlledModalProps = {
  id: 'someSpecificId',
  modalId: controlledModalId,
  theme: 'info',
  children: 'Test',
  // children: this.children,
  // children: this.getContent(),
  actions: controlledModalActions,
  // actions: this.getActions(),
  title: 'Modal title',
  windowWidth: 'md',
  onAction: onAction,
  // onChildAction: this.onLogicalDeviceChildAction,
  // onSelect: this.onSelectLogicalDevice,
  // handleLoaderCancel: this.handleLoaderCancel,
  // useLoader: true,
  // loading: true,
  showCloseButton: true,
  autoClose: true,
  open: true,
};

/* // Test ModalsController initialization...
 * config.modals.initPromise.then(() => {
 *   const ModalsController = config.modals.controller;
 *   console.log('ModalWindow-WithController.fixture: test', {
 *     'config.modals.initPromise': config.modals.initPromise,
 *     'config.modals.isInited': config.modals.isInited,
 *     // 'config.modals.controller': config.modals.controller,
 *     ModalsController: ModalsController,
 *   });
 *   ModalsController.addProxyModal(controlledModalProps);
 *   setTimeout(() => {
 *     ModalsController.updateProxyModal(controlledModalId, {
 *       children: 'Test 2',
 *       loading: false,
 *     });
 *   }, 1000);
 * });
 */

class ControlModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // open: true,
      // loading: true,
    };
  }
  showModal = () => {
    const ModalsController = config.modals.controller;
    console.log('ModalWindow-WithController.fixture:onAction', {
      ModalsController,
      controlledModalProps,
      'this.state': this.state,
    });
    ModalsController.addProxyModal(controlledModalProps);
  }
  render() {
    return (
      <FormGroup flow wrap>
        <FormText>
          With controller:
        </FormText>
        <FormButton
          text="Show controlled modal"
          onClick={this.showModal}
          theme="default"
          inline
        />
      </FormGroup>
    );
  }
}
const controlModal = <ControlModal />;

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
          text="Toggle interactive sample"
          onClick={this.toggle}
          theme="default"
          inline
        />
      </React.Fragment>
    );
  }
}
const interactive = <Interactive />;

/*
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
    console.log('ModalWindow-WithController.fixture:handleLoaderCancel');
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
    console.log('ModalWindow-WithController.fixture:onAction', id);
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
*/

export default {
  controlModal,
  interactive,
};
