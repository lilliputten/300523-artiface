# CHANGELOG

- 2020.12.19, 01:23 -- Added browserlist (for autoprefixer), ixed ie11 styles (PD-3500), Menu: prevent uncheck checked items for `singleChoice=forced`, FormSelect: restored popup closing for `closeOnSelect`, Popup: adjust content width for control width if fullWidth enabled, other minor changes.
- 2020.12.18, 16:57 -- Popup: Fixed css prop names for IE11, demo for uncloseable underlaying popups.
- 2020.12.18, 02:40 -- Popup: Updated props types list, removed state & unused methods, cleaned up code, added external methods `close`, `open` (for using in future `PopupStack`), added (restored) `onControlClick` handler processing.
- 2020.12.18, 01:33 -- Implemented smart popup positioning algorithm (some tests required).
- 2020.12.18, 01:33 -- Done (from TODO): 2020.12.17, 01:52 -- FormSelect/Popup: confilct between visible popup content and shrinkable control. See example `withLabeledGroup` -- Popup can be adaptive for available space only if `overflow: hidden` is specified in css; then content is clipped out and unvisible.
- 2020.12.17, 17:28 -- Refactoring select based on portals (in progress, stage 1). See `https://github.com/tajo/react-portal`.
- 2020.12.16, 23:50 -- Added test dependencies (jest, enzyme), fixed all linting errors/warnings.
- 2020.12.16, 20:23 -- Menu: Updated checked items processing algorithm.
- 2020.12.16, 16:39 -- Popup: checks for case when content must be shown above control element (unused).
- 2020.12.15, 22:05 -- Popup: added geometry analize basic methods (in porogress), fixed click inside/outside handlers. FormItemHOC: passed `setDomRed` handlers valls up to parents.
- 2020.12.15, 21:59 -- Added `utils/strings` module, added `utils/configure` as 'atomic' module (previously, it was only presented as spreaded module).
- 2020.12.14, 20:14 -- FormLabel, FormItemHOC, FormGroup: Component styles & props.
- 2020.12.14, 20:12 -- FormTextInput, FormBooleanHOC: Using combo id (from `inputId`, `id`, `name` props) for editable components.
- 2020.12.14, 20:06 -- utils:configure: cssMapping processing classnames absent in css mappings. Eg: if not found `XXX_id_*`, but found `XXX` (mapped to `YYY`), then producing `YYY_id_*`. Same for `XXX-*`.
- 2020.12.14, 20:05 -- InlineIcon: Use icon id prefix (in form `prefix:id`) for choose icons library (eg, `regular` for `@fortawesome/free-regular-svg-icons` etc).
- 2020.12.11, 01:16 -- PD-3481, v.0.1.6: Using generative themes based on `config.css.themeColors` list (plus `primary`, `secondary` etc).
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
 @changed 2020.12.18, 02:45
-->
