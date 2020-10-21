# Form components implementation status

## instructions

Newly added instructions must be added to next places:

- `src/forms/forms.js` (or other parent module) -- For re-export.
- `src/demo.jsx` (`fixtureComponentsList` object) -- For display in demo mode fixtures list.
- `README.form-components.md` -- Update status of component in generic components list.

## Components to refactor

Legend: `[ ]` -- todo, `[x]` -- in progress, ~~`[x]`~~ -- done;

- ~~[x] `FormButton`~~
- ~~[x] `FormButtonGroup`~~
- ~~[x] `FormInputGroup`~~
-   [ ] `FormDateRange`
-   [ ] `FormDateTime`
-   [x] `FormGroup`
-   [x] `FormItem` (mods: fullWidth, innerFlex (?), disabled, framed (?))
-   [x] `FormLabel`
-   [ ] `FormLabeledGroup`
-   [ ] `FormPager`
-   [ ] `FormPasswordInput`
-   [ ] `FormRadio`
-   [ ] `FormSelect`
-   [ ] `FormText`
-   [x] `FormTextInput`
-   [ ] `FormTextareaInput`

## Elements to remove?

- [ ] `FormHoverableHOC` (?)

## Recently added service components:

- `InlineIcon` (2020.10.07)

## To implement

- `FormSwitch`
- `Popup`

## TODO

- Different item sizes (sm, md, xl, xxl).

<!--
 @changed 2020.10.22, 00:16
-->
