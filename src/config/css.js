/** @module config.css
 *  @description Global styles config
 *  @since 2019.08.29, 10:28
 *  @changed 2021.08.26, 14:14
 */

// Theme...
const THEME = process.env.THEME;
const theme = require(process.env.THEME_FILE);
// const themes = require('./css-themes');
// const theme = themes[THEME];

// Some reusable parameters...
const defaultFontSize = theme.defaultFontSize || 16;
const textColor = theme.textColor || '#444';

const defaultTransitionTime = 250;
const defaultAnimateTime = 500;

const primaryDarkColor = theme.primaryDarkColor || '#06d';
const primaryColor = theme.primaryColor || '#07f';
const primaryLightColor = theme.primaryLightColor || '#6af';
const primaryContrastColor = theme.primaryContrastColor || '#fff';

const secondaryDarkColor = theme.secondaryDarkColor || '#233';
const secondaryColor = theme.secondaryColor || '#677';
const secondaryLightColor = theme.secondaryLightColor || '#abb';
const secondaryContrastColor = theme.secondaryContrastColor || '#fff';

// theme\.\(primaryDarkColor\|primaryColor\|primaryLightColor\|primaryContrastColor\|secondaryDarkColor\|secondaryColor\|secondaryLightColor\|secondaryContrastColor\)\>

const errorColor = theme.errorColor || '#c33';
const dangerColor = theme.dangerColor || '#c33';
const warnColor = theme.warnColor || '#f73'; // '#f96'
const successColor = theme.successColor || '#593'; // '#ac9'
const infoColor = theme.infoColor || primaryColor; // '#29a' // '#9bd'
const confirmColor = theme.primaryColor; // theme.confirmColor /* || primaryColor || textColor */ || '#891'; // '#07f'
const selectColor = theme.selectColor || '#05b';

const neutralColor = '#ccc';

// module.exports = { // Common-used css variables...
const cssConfig = { // Common-used css variables...

  THEME: THEME,

  // primaryColor: primaryColor, // Extends from themeColors
  primaryLightColor: primaryLightColor,
  primaryDarkColor: primaryDarkColor,
  primaryContrastColor: primaryContrastColor || '#fff',

  // secondaryColor: secondaryColor, // Extends from themeColors
  secondaryLightColor: secondaryLightColor,
  secondaryDarkColor: secondaryDarkColor,
  secondaryContrastColor: secondaryContrastColor || '#fff',

  // Colors...

  // Colors for dialogs styles
  errorColor, // theme.errorColor || '#c33',
  dangerColor, // theme.dangerColor || '#c33',
  warnColor, // theme.warnColor || '#f73', // '#f96',
  successColor, // theme.successColor || '#593', // '#ac9',
  infoColor, // theme.infoColor || '#29a', // '#9bd',
  confirmColor, // theme.confirmColor /* || primaryColor || textColor */ || '#891', // '#07f',
  selectColor, // theme.selectColor || '#05b',

  specialContrastColor: '#fff', // Generic contrast for accenting colors

  textColor,
  defaultTextColor: textColor,

  // Neutral colors...

  neutralSuperDarkestColor: '#222',
  neutralDarkestColor: '#333',
  neutralExtraDarkColor: '#666',
  neutralSuperDarkColor: '#777',
  neutralDarkColor: '#999',
  neutralTintedDarkColor: '#aaa',
  neutralShadedColor: '#bbb',
  // neutralColor: neutralColor, // '#ccc', // Extends from themeColors
  neutralTintedColor: '#d0d0d0',
  neutralLightColor: '#e0e0e0',
  neutralSuperLightColor: '#eee',
  neutralExtraLightColor: '#f0f0f0',

  bootstrapDarkColor: '#212529',

  // Theme colors...

  bodyBgColor: theme.bodyBgColor || '#fff',
  bodyTextColor: theme.bodyTextColor || '#333',
  layoutBgColor: theme.layoutBgColor || '#f0f0f0',
  layoutLightBgColor: theme.layoutLightBgColor || '#f7f7f7',

  layoutBorderColor: theme.layoutBorderColor || '#ccc',

  themeColors: { // Generic theming colors...

    // ??? TODO: See buttons themes
    primary: primaryColor,
    secondary: secondaryColor,

    neutral: neutralColor,

    danger: dangerColor,
    error: errorColor,
    warn: warnColor,
    success: successColor,
    info: infoColor,
    confirm: confirmColor,
    select: selectColor,

    // red: '#c33',
    // orange: '#f73',
    // green: '#593',
    grassGreen: '#891',
    softBlue: '#05b',
    lightBlue: '#29a',

    maroon: '#800000',
    red: '#ff0000',
    purple: '#800080',
    fuchsia: '#ff00ff',
    green: '#008000',
    // lime: '#00ff00',
    olive: '#808000',
    // yellow: '#ffff00',
    navy: '#000080',
    blue: '#0000ff',
    teal: '#008080',
    // aqua: '#00ffff',
    orange: '#ffa500',

    blueViolet: '#8a2be2',
    brown: '#a52a2a',
    cadetBlue: '#5f9ea0',
    darkBlue: '#00008b',
    darkCyan: '#008b8b',
    darkGoldenRod: '#b8860b',
    darkOrange: '#ff8c00',
    darkOrchid: '#9932cc',
    darkRed: '#8b0000',
    darkSlateBlue: '#483d8b',
    darkSlateGray: '#2f4f4f',

  },

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
  defaultLineHeight: 1.3,
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

  // Modal sizes...
  modalMinWidth: 300, // Minimal width for 'auto' mode
  modalWindowPadding: 20, // Windows padding
  modalSizes: { // Generic theming colors...
    xs: 200,
    sm: 400,
    md: 600,
    lg: 800,
    xl: 1000,
    xxl: 1200,
  },

  // Spacings & paddings...

  innerPadding: 5,
  itemPadding: 10,
  containerPadding: 15,
  blockPadding: 20,

  // Timeouts & delays...

  transitionTime: defaultTransitionTime, // ms
  animateTime: defaultAnimateTime, // ms

  // Modals parameters...

  modalAnimateTime: defaultAnimateTime,
  modalWindowAnimateTime: defaultTransitionTime,

  // NOTE 2021.01.12, 13:54 -- `absolute` required for modal windows, `fixed` required for popups -- ???
  modalContainerPosition: 'absolute',
  modalPortalPosition: 'absolute',
  // modalContainerPosition: 'fixed',
  // modalPortalPosition: 'fixed',

  // Parameters...

  // // Use global flex container & in page components scrolls
  // // NOTE: 2019.06.14, 13:14 -- Not used. Using `html.Clippable` dynamically creating selectors.
  // useGlobalClipping: true,

};

// Expand `cssConfig.themeColors.*` to `cssConfig.*Color`
Object.keys(cssConfig.themeColors).forEach(id => {
  if (!cssConfig[id + 'Color']) {
    cssConfig[id + 'Color'] = cssConfig.themeColors[id];
  }
});

const formItemSpacing = 4;
const formItemHeight = 32; // px
const formItemBorderSize = 1; // px
const formItemInnerHeight = formItemHeight; // - formItemBorderSize * 2; // px -- if used css border

Object.assign(cssConfig, { // Form properties...

  // Forms...

  formItemSpacing, // px
  formItemHeight, // px
  formItemBorderSize, // px
  formItemInnerHeight, // px

  formItemBorderRadius: 3, // px
  formItemOuterGlow: 4, // px
  formItemGlowColor: cssConfig.primaryColor, // cssConfig.neutralColor,
  formItemBorderColor: cssConfig.neutralColor,
  formItemActorColor: cssConfig.neutralDarkColor,
  formItemBgColor: '#fff',
  formItemTextColor: cssConfig.defaultTextColor,
  formItemPlaceholderColor: cssConfig.neutralColor,
  formItemInnerPaddingH: 8,
  formItemDisabledOpacity: .5,

  formPlaceholderColor: '#ccc',

  // Menu...

  menuVPadding: 8,
  menuSeparatorVPadding: 4,
  menuSeparatorHPadding: 4,

  // tableBorderWidth: 2,

  defaultIconSize: 24,
  smallIconSize: 16,

  popupVerticalOffset: 4,
  popupWindowOffset: 10,

});

module.exports = cssConfig;
