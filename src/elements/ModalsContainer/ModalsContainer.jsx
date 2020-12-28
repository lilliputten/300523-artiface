/** @module ModalsContainer
 *  @class ModalsContainer
 *  @since 2020.12.21, 23:37
 *  @changed 2020.12.21, 23:37
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'react-portal'
// import { cssMapping } from 'utils/configure'
import { cn } from 'utils/configure'
import config from 'config'
// import { ModalsContextProvider } from 'helpers/ModalsContext'

import './ModalsContainer.pcss'

const cnModalsContainer = cn('ModalsContainer')

// const doDebug = false // DEBUG!

class ModalsContainer extends React.PureComponent /** @lends @ModalsContainer.prototype */ {

  modalsStack = []

  // Lifecycle...

  constructor(props) {
    super(props)
    // ???
    // const {
    //   modalsContainerNode, // ModalsContext Provider
    // } = props
    // console.log(modalsContainerNode)
    // debugger
  }
  componentDidMount() {
    // this.registerGlobalHandlers()
    if (typeof config.modals._initPromiseResolve == 'function') {
      config.modals._initPromiseResolve()
    }
    config.modals.isInited = true
    config.modals.containerNode = this
    // eslint-disable-next-line react/no-find-dom-node
    const domNode = ReactDOM.findDOMNode(this) // TODO: Find alternate legal method to get dom node? (refs doesn't works due to high-level element (`TransitionGroup`) rendering)
    config.modals.domNode = domNode
  }

  componentWillUnmount() {
    // this.unregisterGlobalHandlers()
  }

  // Handlers...

  // External methods...

  registerModal = (modal) => {
    // console.log('ModalsContainer:registerModal', modal.props.type, modal.props.id)
    if (!this.modalsStack.includes(modal)) { // Add to stack if not exist
      this.modalsStack.push(modal)
    }
  }

  unregisterModal = (modal) => {
    // console.log('ModalsContainer:unregisterModal', modal.props.type, modal.props.id)
    const idx = this.modalsStack.indexOf(modal)
    if (idx !== -1) { // Remove if found...
      this.modalsStack.splice(idx, 1)
    }
  }

  getTopmostVisibleModal = () => {
    // Look for items from last (topmost) to first (bottommost) for first visible
    for (let n = this.modalsStack.length - 1; n >= 0; n--) {
      const modal = this.modalsStack[n]
      const isVisible = modal.isVisible()
      if (isVisible) {
        return modal
      }
    }
  }

  isModalTopmostVisible = (modal) => {
    const topmost = this.getTopmostVisibleModal()
    return (modal === topmost)
  }

  // Render...

  renderModalsContainer() {
    const { containerId } = config.modals
    const className = cnModalsContainer(null, [this.props.className/* , cnModalsContainer('TransitionGroup') */])
    const renderProps = {
      key: containerId || 'ModalsContainer',
      id: containerId,
      className,
    }
    /* // UNUSED: Failed `ModalsContext` test implementation
     * return (
     *   <ModalsContextProvider value={this}>
     *     <div {...renderProps} />
     *   </ModalsContextProvider>
     * )
     */
    return (
      <div {...renderProps} />
    )
  }

  render() {
    const node = document.body // Render as new node in top level of dom tree
    return (
      <Portal node={node}>
        {this.renderModalsContainer()}
      </Portal>
    )
  }

}

export default ModalsContainer
