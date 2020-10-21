/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2020.10.21, 22:52
 */

// Theme...
const THEME = process.env.THEME
const theme = require(process.env.THEME_FILE)

// Some reusable parameters...
const defaultFontSize = theme.defaultFontSize || 16
const textColor = theme.textColor || '#444'

const defaultTransitonTime = 250
const defaultAnimateTimeout = 500

// module.exports = { // Common-used css variables...
const cssConfig = { // Common-used css variables...

  THEME: THEME,

  primaryColor: theme.primaryColor,
  primaryLightColor: theme.primaryLightColor,
  primaryDarkColor: theme.primaryDarkColor,
  primaryContrastColor: theme.primaryContrastColor,

  secondaryColor: theme.secondaryColor,
  secondaryLightColor: theme.secondaryLightColor,
  secondaryDarkColor: theme.secondaryDarkColor,
  secondaryContrastColor: theme.secondaryContrastColor,

  // Colors...

  // Colors for dialogs styles
  errorColor: theme.errorColor || '#c33',
  warnColor: theme.warnColor || '#f73', // '#f96',
  successColor: theme.successColor || '#593', // '#ac9',
  infoColor: theme.infoColor || '#29a', // '#9bd',
  confirmColor: theme.confirmColor /* || theme.primaryColor || textColor */ || '#891', // '#07f',
  selectColor: theme.selectColor || '#05b',

  specialContrastColor: '#fff', // Generic contrast for accenting colors

  textColor,
  defaultTextColor: textColor,

  // Neutral colors...

  neutralExtraDarkColor: '#666',
  neutralDarkColor: '#999',
  neutralTintedDarkColor: '#aaa',
  neutralShadedColor: '#bbb',
  neutralColor: '#ccc',
  neutralTintedColor: '#d0d0d0',
  neutralLightColor: '#e0e0e0',
  neutralExtraLightColor: '#f0f0f0',

  // Layout colors...

  bodyBgColor: theme.bodyBgColor || '#fff',
  bodyTextColor: theme.bodyTextColor || '#333',
  layoutBgColor: theme.layoutBgColor || '#f0f0f0',
  layoutLightBgColor: theme.layoutLightBgColor || '#f7f7f7',

  layoutBorderColor: theme.layoutBorderColor || '#ccc',

  // Fonts...

  defaultFont: theme.defaultFont || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

  defaultFontSize,
  fontSize: defaultFontSize,
  fontSizeM: defaultFontSize,
  fontSizeSm: defaultFontSize - 2,
  fontSizeXs: defaultFontSize - 4,
  fontSizeLg: defaultFontSize + 2,
  fontSizeXl: defaultFontSize + 4,
  fontSizeXxl: defaultFontSize + 8,
  titleFontSize: defaultFontSize + 8,
  defaultLineHeight: 1.6,
  // defaultFontWeight: 400,
  defaultFontWeight: 'normal',
  // defaultFontWeight: 500,
  // defaultBemFontSize: defaultFontSize,

  // Breakpoints (from bootstrap)
  bk_xs: 0,
  bk_sm_pre: 575.98,
  bk_sm: 576,
  bk_md_pre: 767.98,
  bk_md: 768,
  bk_lg_pre: 991.98,
  bk_lg: 992,
  bk_xl_pre: 1199.98,
  bk_xl: 1200,

  // Median breakpoints (breakpoints between popular screen sizes
  bm_xs: 0,
  bm_sm_pre: 399.98,
  bm_sm: 400,
  bm_md_pre: 699.98,
  bm_md: 700,
  bm_lg_pre: 799.98,
  bm_lg: 800,
  bm_xl_pre: 1099.98,
  bm_xl: 1100,

  // Spacings & paddings...

  innerPadding: 5,
  itemPadding: 10,
  containerPadding: 15,
  blockPadding: 20,

  // Timeouts & delays...

  transitionTime: defaultTransitonTime, // ms

  animateTimeout: defaultAnimateTimeout, // ms
  modalAnimateTimeout: defaultAnimateTimeout, // ms

  // Parameters...

  // // Use global flex container & in page components scrolls
  // // NOTE: 2019.06.14, 13:14 -- Not used. Using `html.Clippable` dynamically creating selectors.
  // useGlobalClipping: true,

}

const formItemSpacing = 4
const formItemHeight = 32 // px
const formItemBorderSize = 1 // px
const formItemInnerHeight = formItemHeight - formItemBorderSize * 2 // px

Object.assign(cssConfig, { // Form properties...

  // Forms...

  formItemSpacing, // px
  formItemHeight, // px
  formItemBorderSize, // px
  formItemInnerHeight, // px

  formItemBorderRadius: 3, // px
  formItemBorderColor: cssConfig.neutralColor,
  formItemActorColor: cssConfig.neutralDarkColor,
  formItemBgColor: '#fff',
  formItemTextColor: cssConfig.defaultTextColor,
  formItemPlaceholderColor: cssConfig.neutralColor,
  formItemInnerPaddingH: 8,
  formItemDisabledOpacity: .5,

  formPlaceholderColor: '#ccc',

  // tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16,

})

module.exports = cssConfig
