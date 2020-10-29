# Form components implementation status

## instructions

Newly added instructions must be added to next places:

- `src/forms/forms.js` (or other parent module) -- For re-export.
- `src/demo.jsx` (`fixtureComponentsList` object) -- For display in demo mode fixtures list.
- `README.form-components.md` -- Update status of component in generic components list.

## Components to refactor

Legend: `[ ]` -- todo, `[x]` -- in progress, ~~`[x]`~~ -- done;

- ~~[x] `InlineIcon`~~
- ~~[x] `Popup`~~
- ~~[x] `Menu`, `MenuItem` (in progress)~~
- ~~[x] `FormItemHOC` (mods: fullWidth, innerFlex (?), disabled, framed (?))~~
- ~~[x] `FormButton`~~
- ~~[x] `FormButtonGroup`~~
- ~~[x] `FormInputGroup`~~
-   [ ] `FormDateRange` (???)
-   [ ] `FormDateTime` (???)
- ~~[x] `FormGroup`~~
- ~~[x] `FormLabel`~~
-   [ ] `FormLabeledGroup`
-   [ ] `FormPager`
-   [ ] `FormPasswordInput`
-   [ ] `FormRadio`
- ~~[x] `FormSelect` (based on `Popup` & `Menu`)~~
-   [ ] `FormText`
- ~~[x] `FormTextInput`~~
-   [ ] `FormTextareaInput`

## Elements to remove?

- [ ] `FormHoverableHOC` (?)

## To implement

- `FormSwitch`

## TODO

- Different item sizes (sm, md, xl, xxl).

<!--
 @changed 2020.10.29, 03:18
-->
