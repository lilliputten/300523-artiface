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
// import { // Transitions...
//   // CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group'
import config from 'config'

import './ModalsContainer.pcss'

const cnModalsContainer = cn('ModalsContainer')

// const doDebug = false // DEBUG!

class ModalsContainer extends React.PureComponent /** @lends @ModalsContainer.prototype */ {

  // Lifecycle...

  /* // UNUSED: constructor
   * constructor(props) {
   *   super(props)
   *   this.ref = React.createRef()
   *   // this.state = {}
   *   // const initedPromise = new
   * }
   */

  componentDidMount() {
    // this.registerGlobalHandlers()
    if (typeof config.modals._initPromiseResolve == 'function') {
      config.modals._initPromiseResolve()
      // setTimeout(config.modals._initPromiseResolve, 1000) // Delayed initializing?
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

  /* // UNUSED: Using (deprecated!) `findDOMNode` in `componentDidMount` (see above)
   * setDomRef = (domNode) => {
   *   if (typeof config.modals._initPromiseResolve == 'function') {
   *     config.modals._initPromiseResolve()
   *   }
   *   config.modals.isInited = true
   *   config.modals.containerNode = this
   *   // eslint-disable-next-line react/no-find-dom-node
   *   const domNode = ReactDOM.findDOMNode(domNode)
   *   debugger
   *   config.modals.domNode = domNode
   * }
   */

  // Render...

  renderModalsContainer() {
    const { containerId } = config.modals
    const className = cnModalsContainer(null, [this.props.className/* , cnModalsContainer('TransitionGroup') */])
    const renderProps = {
      key: containerId || 'ModalsContainer',
      id: containerId,
      className,
      // ref: this.setDomRef, // UNUSED: Using (deprecated!) `findDOMNode` in `componentDidMount` (see above)
      // style: { border: '10px solid blue' }, // DEBUG
    }
    /* // TRY: css-transitions
     * <TransitionGroup className={cnModalsContainer('TransitionGroup')}>
     *   <CSSTransition
     *     key={id}
     *     timeout={5000}
     *     // timeout={config.css.animateTime}
     *     classNames={cnModalsContainer('Transition')}
     *   >
     *     <div {...renderProps}>
     *       {popupContent}
     *     </div>
     *   </CSSTransition>
     * </TransitionGroup>
     * <TransitionGroup {...renderProps}>
     *   <div>xxx</div>
     * </TransitionGroup>
     */
    return (
      <div {...renderProps} />

    )
  }

  render() {
    const node = document.body
    return (
      <Portal node={node}>
        {this.renderModalsContainer()}
      </Portal>
    )
  }

}

export default ModalsContainer
