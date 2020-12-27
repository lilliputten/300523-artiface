/** @module Loader
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.25, 00:29
 *
 *  TODO: Place block (and local?) loaders into `ModalsContainer`?
 */

import React from 'react'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure'
import { // Form items...
  FormButton,
  FormGroup,
  // utils as WebUiCoreUtils, // Moved to root index
} from 'forms'

const cnLoader = cn('Loader')

import './Loader.pcss'
import './Loader-animation.pcss'
import './Loader-modes.pcss'
import './Loader-themes.pcss'

// eslint-disable-next-line react/prefer-stateless-function
// export default class Loader extends React.PureComponent [>* @lends @Modal.prototype <] {

/** Loader component
 * @param {Boolean} [show]
 * @param {String} [theme] - Component theme (Light, none)
 * @param {Object} commonLang - Mapped language component
 */
const Loader = (props) => {
  const {
    className/*  = 'preloader' */,
    mode,
    show,
    theme,
    // commonLang,
    text,
    onCancel,
    cancelText,
  } = props
  const actions = (typeof onCancel === 'function') && (
    <div className={cnLoader('Actions')}>
      <FormGroup flow alignItems="center">
        <FormButton
          plain
          onDark
          text={cancelText || 'Cancel'}
          icon="faTimes"
          onClick={onCancel}
        />
      </FormGroup>
    </div>
  )
  const thisClassName = cnLoader({ mode, theme, show }, [ className, /* showClass */ ])
  const showText = (text != null) ? text : 'Loading...' // commonLang && commonLang.pleaseWait
  return (
    <div className={thisClassName}>
      <div className={cnLoader('Container')}>
        <div className={cnLoader('Spinner')} />
        <div className={cnLoader('Text')}>{showText}</div>
        {actions}
      </div>
    </div>
  )
}
export default Loader
