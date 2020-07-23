/** @module FormItemHOC
 *  @class FormItemHOC
 *  @since 2019.09.25, 19:18
 *  @changed 2020.06.04, 22:58
 */

import React from 'react'
import { cn } from '@bem-react/classname'

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

const wrapFormItemHOC = (WrappedComponent, params = {}) => class extends React.Component {

  // Helper methods...

  getFlag(id) { // Get parameter from state or from props
    return (this.state[id] != null) ? this.state[id] : this.props[id]
  }

  // Lifecycle methods...

  constructor(props) {
    super(props)
    this.state = deriveState(defaultState, params, props) // deriveStateFromProps(props, defaultState)
    // if (params.hoverable) {
    //   console.log(this.state)
    //   debugger
    // }
    this.id = props.id || params.id
    this.formItemRef = React.createRef()
  }

  static getDerivedStateFromProps(props, state) {
    // TODO: Update event subscriptions if `hoverable` flag changed?
    return deriveState(params, props, state) // deriveStateFromProps(props, state)
  }

  componentDidMount() {
    // const { formItemRef: { current } = {} } = this
    const { formItemDomRef } = this
    const { hoverable } = this.state
    if (hoverable && formItemDomRef && formItemDomRef.addEventListener) {
      this.hoverableInited = true
      formItemDomRef.addEventListener('mouseover', this.handleMouseOver)
      formItemDomRef.addEventListener('mouseout', this.handleMouseOut)
    }
  }

  componentWillUnmount() {
    if (this.hoverableInited) {
      // const { formItemRef: { current } = {} } = this
      const { formItemDomRef } = this
      if (formItemDomRef && formItemDomRef.removeEventListener) {
        formItemDomRef.removeEventListener('mouseover', this.handleMouseOver)
        formItemDomRef.removeEventListener('mouseout', this.handleMouseOut)
      }
    }
  }

  getClassName() {
    // Collect modifier values from state or props
    const mods = classNameModifiers.reduce((mods, id) =>{
      const val = this.getFlag(id) // (this.state[id] != null) ? this.state[id] : this.props[id]
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
    const disabled = this.getFlag('disabled')
    const hoverable = this.getFlag('hoverable')
    if (hoverable && !disabled) {
      this.setState({ hovered: true })
    }
  }
  handleMouseOut = () => {
    const disabled = this.getFlag('disabled')
    const hoverable = this.getFlag('hoverable')
    if (hoverable && !disabled) {
      this.setState({ hovered: false })
    }
  }

  setDomRef = (domRef) => {
    this.formItemDomRef = domRef
  }

  render() {
    const {
      hovered,
      focused,
    } = this.state
    return (
      <WrappedComponent
        {...this.props}
        hovered={hovered}
        focused={focused}
        className={this.getClassName()}
        setDomRef={this.setDomRef}
      />
    )
  }
}

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
