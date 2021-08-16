/** @module demoFixtures
 *  @desc Demo fixtures list
 *  @since 2021.02.15, 18:05
 *  @changed 2021.07.08, 15:02
 */
/* tslint:disable: no-implicit-dependencies no-submodule-imports */

/* TODO 2021.08.16, 11:27 -- To fix tslint errors:
 * ERROR: 21:18  no-submodule-imports      Submodule import paths from this package are disallowed; import from the root instead
 * ERROR: 21:18  no-implicit-dependencies  Module 'demo' is not listed as dependency in package.json
 */

// import * as build from './build'

type TFixture = {
  default: any,
  demoTitle: string,
  DemoWrapper: React.ReactNode,
};
type TFixturesList = {
  [key: string]: TFixture,
};

const demoFixtures: TFixturesList = {

  Hello: require('demo/Hello/Hello.fixture'),

  Loader: require('elements/Loader/Loader.fixture'),

  ModalWindow: require('elements/ModalWindow/ModalWindow.fixture'),
  ModalProxifiedWindow: require('elements/ModalProxifiedWindow/ModalProxifiedWindow.fixture'),
  ModalWindowWithController: require('elements/ModalWindow/ModalWindow-WithController.fixture'),
  ModalPopup: require('elements/ModalPopup/ModalPopup.fixture'),

  FormSeparator: require('forms/FormSeparator/FormSeparator.fixture'),

  InlineIcon: require('elements/InlineIcon/InlineIcon.fixture'),
  Menu: require('elements/Menu/Menu.fixture'),
  MenuItem: require('elements/MenuItem/MenuItem.fixture'),
  MenuItemSeparator: require('elements/MenuItemSeparator/MenuItemSeparator.fixture'),

  FormPager: require('forms/FormPager/FormPager.fixture'),

  FormIcon: require('forms/FormIcon/FormIcon.fixture'),
  FormButton: require('forms/FormButton/FormButton.fixture'),
  FormButtonThemes: require('forms/FormButton/FormButton-Themes.fixture'),
  FormButtonDark: require('forms/FormButton/FormButton-Dark.fixture'),

  FormLabel: require('forms/FormLabel/FormLabel.fixture'),
  FormTextInput: require('forms/FormTextInput/FormTextInput.fixture'),
  FormPasswordInput: require('forms/FormPasswordInput/FormPasswordInput.fixture'),
  FormSelect: require('forms/FormSelect/FormSelect.fixture'),
  FormText: require('forms/FormText/FormText.fixture'),

  // Booleans...
  FormRadio: require('forms/FormRadio/FormRadio.fixture'),
  FormRadioThemes: require('forms/FormRadio/FormRadio-Themes.fixture'),
  // FormCheck: require('forms/FormCheck/FormCheck.fixture'),
  // FormSwitch: require('forms/FormSwitch/FormSwitch.fixture'),

  // Date/time...
  DateTimeSelector: require('elements/DateTimeSelector/DateTimeSelector.fixture'),
  FormDateTime: require('forms/FormDateTime/FormDateTime.fixture'),
  FormDateRange: require('forms/FormDateRange/FormDateRange.fixture'),

  FormContainer: require('forms/FormContainer/FormContainer.fixture'),

  FormGroup: require('forms/FormGroup/FormGroup.fixture'),
  FormButtonGroup: require('forms/FormButtonGroup/FormButtonGroup.fixture'),
  FormInputGroup: require('forms/FormInputGroup/FormInputGroup.fixture'),
  FormLabeledGroup: require('forms/FormLabeledGroup/FormLabeledGroup.fixture'),

  FormActions: require('forms/FormActions/FormActions.fixture'),

};

export default demoFixtures;
