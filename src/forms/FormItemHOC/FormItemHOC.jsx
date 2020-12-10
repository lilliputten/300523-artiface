/** @module FormItemHOC
 *  @class FormItemHOC
 *  @since 2019.09.25, 19:18
 *  @changed 2020.06.04, 22:58
 */

import React from 'react'
import { cn } from 'utils'

import './FormItemHOC.pcss'

const cnFormItem = cn('FormItem')

const classNameModifiers = [ // Pass props/state params to class modifiers
  // Display-related modifiers...
  'fullWidth',
  'innerFlex', // (???)
  'solid', // Item is unwrappable (???)
  'framed', // Frame around item (input field, select etc) (???)
  // Behavior-related modifiers...
  'hoverable', // Allow hover effects
  'focusable', // Allow hover effects
  'clickable',
  // States...
  'hovered',
  'focused',
  'pressed',
  'checked',
  'disabled',
  'fill', // (???)
]

const defaultState = { // Default state
  // hoverable: false,
  // focusable: false,
}

const props2State = [ // Pass props to state
  'hoverable', // Allow hover effects
  'focusable', // Allow hover effects
]

// Helper functions...

const deriveState = (...sets) => {
  return props2State.reduce((state, id) =>{
    const val = sets.reduce((val, set) => {
      return (set[id] != null /* && val == null */) ? set[id] : val
    }, null)
    if (val != null) {
      return { ...state, [id]: val }
    }
    return state
  }, defaultState)
}
/* // UNUSED: deriveStateFromProps
 * const deriveStateFromProps = (props, defaultState) => {
 *   return props2State.reduce((state, id) =>{
 *     const val = props[id]
 *     if (val != null) {
 *       return { ...state, [id]: val }
 *     }
 *     return state
 *   }, defaultState)
 * }
 */

// Unique id counter
let uniqIdCount = 1

const wrapFormItemHOC = (WrappedComponent, params = {}) => class extends React.Component {

  // Helper methods...

  getStateOrPropOrParam(id) { // Get parameter from state or from props
    return (this.state[id] != null) ? this.state[id] :
      (this.props[id] != null) ? this.props[id] :
        params[id]
  }

  createUniqId() {
    return 'FormItem' + (uniqIdCount++)
  }

  getId(props) {
    props = props || this.props
    return props.id || this.id || (this.id = this.createUniqId())
  }

  // Lifecycle methods...

  constructor(props) {
    super(props)
    this.state = deriveState(defaultState, params, props) // deriveStateFromProps(props, defaultState)
    this.id = props.id || params.id
    // this.formItemRef = React.createRef()
  }

  static getDerivedStateFromProps(props, state) {
    // TODO: Update event subscriptions if `hoverable` flag changed?
    return deriveState(params, props, state) // deriveStateFromProps(props, state)
  }

  componentDidMount() {
    // const { formItemRef: { current } = {} } = this
    const { formItemDomRef } = this
    if (formItemDomRef && formItemDomRef.addEventListener) {
      const hoverable = this.getStateOrPropOrParam('hoverable')
      const focusable = this.getStateOrPropOrParam('focusable')
      if (hoverable && !this.hoverableInited) {
        this.hoverableInited = true
        formItemDomRef.addEventListener('mouseover', this.handleMouseOver)
        formItemDomRef.addEventListener('mouseout', this.handleMouseOut)
      }
      if (focusable && !this.focusableInited) {
        this.focusableInited = true
        formItemDomRef.addEventListener('focus', this.handleFocus)
        formItemDomRef.addEventListener('blur', this.handleBlur)
      }
    }
  }

  componentWillUnmount() {
    const { formItemDomRef } = this
    if (formItemDomRef && formItemDomRef.removeEventListener) {
      // const hoverable = this.getStateOrPropOrParam('hoverable')
      // const focusable = this.getStateOrPropOrParam('focusable')
      if (this.hoverableInited) {
        formItemDomRef.removeEventListener('mouseover', this.handleMouseOver)
        formItemDomRef.removeEventListener('mouseout', this.handleMouseOut)
      }
      if (this.focusableInited) {
        formItemDomRef.removeEventListener('focus', this.handleFocus)
        formItemDomRef.removeEventListener('blur', this.handleBlur)
      }
    }
  }

  getClassName() {
    // Collect modifier values from state or props
    const mods = classNameModifiers.reduce((mods, id) =>{
      const val = this.getStateOrPropOrParam(id) // (this.state[id] != null) ? this.state[id] : this.props[id]
      if (val != null) {
        mods[id] = val
      }
      return mods
    }, {})
    return cnFormItem(mods, [this.props.className])
  }

  /* // For `focusable` state (TODO?)
   * handleFocus() {
   *   this.setState({ focused: true })
   * }
   * handleBlur() {
   *   this.setState({ focused: false })
   * }
   */

  handleMouseOver = () => {
    const disabled = this.getStateOrPropOrParam('disabled')
    const hoverable = this.getStateOrPropOrParam('hoverable')
    if (hoverable && !disabled) {
      this.setState({ hovered: true })
    }
  }
  handleMouseOut = () => {
    const disabled = this.getStateOrPropOrParam('disabled')
    const hoverable = this.getStateOrPropOrParam('hoverable')
    if (hoverable && !disabled) {
      this.setState({ hovered: false })
    }
  }

  handleFocus = () => {
    const disabled = this.getStateOrPropOrParam('disabled')
    const focusable = this.getStateOrPropOrParam('focusable')
    if (focusable && !disabled) {
      this.setState({ focused: true })
    }
  }
  handleBlur = () => {
    const disabled = this.getStateOrPropOrParam('disabled')
    const focusable = this.getStateOrPropOrParam('focusable')
    if (focusable && !disabled) {
      this.setState({ focused: false })
    }
  }

  setDomRef = (domRef) => { // Children dom node receiver
    this.formItemDomRef = domRef
    domRef && domRef.focus && domRef.focus()
  }

  render() {
    // const id = this.getId() // this.props.id || this.id || (this.id = this.createUniqId())
    const {
      hovered,
      focused,
    } = this.state
    // TODO: Generate unique id?
    const renderProps = {
      hovered,
      focused,
      className: this.getClassName(),
      setDomRef: this.setDomRef, // Children dom node receiver
    }
    const focusable = this.getStateOrPropOrParam('focusable')
    if (focusable) {
      renderProps.tabIndex = 0
    }
    return (
      <WrappedComponent
        {...this.props}
        {...renderProps}
        // id={id}
      />
    )
  }

}

/** Usage:
 * FormItemHOC(component)
 * FormItemHOC(params)(component)
 */
const FormItemHOC = (params) => {
  if (typeof params === 'string') { // Passed identifier
    params = { id: params }
  }
  if (typeof params === 'object') { // Params passed -> metafabric
    return (component) => wrapFormItemHOC(component, params)
  }
  else { // Component passed -> simple fabric
    return wrapFormItemHOC(params)
  }
}

export default FormItemHOC
