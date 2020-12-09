/** @module FormPasswordInput
 *  @class FormPasswordInput
 *  @since 2020.10.29, 23:50
 *  @changed 2020.10.30, 00:03
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'

// import InlineIcon from 'elements/InlineIcon'
import FormItemHOC from '../FormItemHOC'
import FormTextInput from '../FormTextInput'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './FormPasswordInput.pcss'

const cnFormPasswordInput = cn('FormPasswordInput')

class FormPasswordInput extends React.Component /** @lends @FormPasswordInput.prototype */ {

  // Lifecycle...

  constructor(props) {
    super(props)
    const { type = 'password' } = this.props
    this.state = {
      type,
    }
  }

  componentDidUpdate(prevProps/* , prevState */) {
    const prevType = prevProps.type
    const propsType = this.props.type
    const stateType = this.state.type
    if (prevType !== propsType && propsType !== stateType) {
      this.setState({
        type: propsType,
      })
    }
    // else if (prevState.type !== stateType) {
    //   this.updateType(this.state)
    // }
  }

  // Helper methods...

  getClassName() {
    const {
      id,
    } = this.props
    const classList = cnFormPasswordInput({
      id,
    }, [this.props.className])
    return classList
  }

  // Event handlers...

  onTypeIconClick = () => {
    const { type } = this.state
    const setType = (type === 'password') ? 'type' : 'password'
    this.setState({ type: setType })
  }

  // Render...

  render() {

    const {
      type,
    } = this.state

    const icon = (type === 'password') ? 'faEyeSlash' : 'faEye'
    return (
      <FormTextInput
        iconTitle="Show/hide password"
        onIconClick={this.onTypeIconClick}
        {...this.props}
        type={type}
        icon={icon}
      />
    )

  }

}

/* // propTypes
 * FormPasswordInput.propTypes = {
 *   id: PropTypes.string,
 * }
 */
export default /* FormItemHOC({ hoverable: true, framed: true })( */ FormPasswordInput

