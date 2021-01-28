# Menu

Menu items can be provided as `MenuItem` elements (`<MenuItem val="2" text="Skiing" selected />`) or description objects (`{ val: 2, text: 'Skiing', selected: true }`). Value property here treating as string.

NOTE: Selected items state stored in controlled `MenuItem` components not in component own' store.

## Modes (TODO: update from propTypes)

- `selectable`: Allow to check elements
- `singleChoice`: Single choice mode (default is multiple), if `true` -- then single-optional, if `'forced'` -- then choice is required.
- `layout` -- `vertical` (default), `horizontal`
- `disabled`

## Event handlers (TODO: update from propTypes)

- `onChange`
- `onClick`

## TODO

- `prerenderItems` (???)
- group (w/title) or delim/section?

<!--
 @since 2020.10.27, 02:58
 @changed 2021.01.28, 21:55
-->
