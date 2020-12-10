# CHANGELOG

- 2020.12.11, 01:16 -- Using generative themes based on `config.css.themeColors` list (plus `primary`, `secondary` etc).
- 2020.12.11, 01:16 -- Replace `style` prop with `theme` for form elements.
- 2020.12.10, 18:45 -- Migrated FormDelim, FormSpacer, FormInputGroup, FormLabeledGroup uikit modules.
- 2020.12.10, 18:44 -- README.migrate-from-uikit.md -- Minimal instructions fro migrating old-style `uikit` modules (in progress).
- 2020.12.10, 18:43 -- Added FormRadio component.
- 2020.12.10, 18:42 -- FormItemHOC: focusable modifier & dom node events.
- 2020.12.09, 23:08 -- v.0.1.5
- 2020.12.08, 22:15 -- PD-3476, v.0.1.4: Css-modules class name transformations. Using wrapper for `@bem-react/classname/cn()` in `utils/configure/cn()` -- `import { cn } from 'utils'`). In target project must be set configuration options: `WebUiCore.utils.setConfigOptions({ useCssModules: true, cssMappings })` where `cssMappings` is import result of `WebUiCore` webpacked css file (`import cssMappings from 'WebUiCore/styles.css'`). In progress, TODO: Replace all `cn` invokes with `cn` from `utils` submodule.
- 2020.12.08, 13:38 -- PD-3474, v.0.1.2: Dark & plain button styles. Eslint configuration (from current `WebUi` project).
- 2020.10.30, 00:04 -- Added `FormPasswordInput` component.
- 2020.10.29, 22:41 -- FormTextInput: icon property, hasClear feature. Added components: `FormText`. FormItem: clickable mod, minor changes.
- 2020.10.29, 03:14 -- `FormSelect` component, advanced `Popup`, popup-adapted `FormButton` (variation:popupControl).
- 2020.10.27, 21:28 -- Checkable menu (multiple, single, single-mandatory modes), onClick & onChange event handlers. MenuItem: checkable,checked, withIcon, icon props.
- 2020.10.27, 05:58 -- Menu, MenuItems: basic functional.
- 2020.10.27, 01:00 -- Popup: basic functional.
- 2020.10.22, 00:15 -- FormInputGroup.
- 2020.10.21, 23:45 -- FormButtonGroup.
- 2020.10.21, 20:45 -- FormButton styles (theme & raw colors).
- 2020.10.20, 01:12 -- FormTextInput, FormLabel, FormGroup, FormItem: demo fixtures, fullWidth property.
- 2020.10.07, 15:36 -- `FormTextInput`: done in general.
- 2020.10.06, 13:39 -- v.0.1.1: Scaffolded repos on `gitlab.local` (with tag).
- 2020.10.05, 20:38 -- v.0.0.15: Extracted `demoSupport.jsx` routines, fixture selection from url query (parameter `fixture`), added avaialble fixtures list if fixture to display is not specified, added DemoWrapper & demoTitle exportable ficture parameters for demo rendering.

<!--
 @changed 2020.10.30, 00:06
-->
