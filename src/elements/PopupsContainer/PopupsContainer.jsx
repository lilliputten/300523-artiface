/** @module PopupsContainer
 *  @class PopupsContainer
 *  @since 2020.12.21, 23:37
 *  @changed 2020.12.21, 23:37
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Portal } from 'react-portal'
// import { cssMapping } from 'utils/configure'
import { cn } from 'utils/configure'
import { // Transitions...
  // CSSTransition,
  TransitionGroup,
} from 'react-transition-group'
import config from 'config'

import './PopupsContainer.pcss'

const cnPopupsContainer = cn('PopupsContainer')

// const doDebug = false // DEBUG!

// const globalClickEventName = 'mousedown'
// const globalKeyPressEventName = 'keydown'
// const globalScrollEventName = 'scroll'
// const globalResizeEventName = 'resize'

class PopupsContainer extends React.PureComponent /** @lends @PopupsContainer.prototype */ {

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
    if (typeof config.popups._initPromiseResolve == 'function') {
      // config.popups._initPromiseResolve()
      setTimeout(config.popups._initPromiseResolve, 1000)
    }
    config.popups.isInited = true
    config.popups.containerNode = this
    // eslint-disable-next-line react/no-find-dom-node
    const domNode = ReactDOM.findDOMNode(this) // TODO: Find alternate legal method to get dom node? (refs doesn't works due to high-level element (`TransitionGroup`) rendering)
    config.popups.domNode = domNode
  }

  componentWillUnmount() {
    // this.unregisterGlobalHandlers()
  }

  // Handlers...

  /* // UNUSED: Using (deprecated!) `findDOMNode` in `componentDidMount` (see above)
   * setDomRef = (domNode) => {
   *   if (typeof config.popups._initPromiseResolve == 'function') {
   *     config.popups._initPromiseResolve()
   *   }
   *   config.popups.isInited = true
   *   config.popups.containerNode = this
   *   // eslint-disable-next-line react/no-find-dom-node
   *   const domNode = ReactDOM.findDOMNode(domNode)
   *   debugger
   *   config.popups.domNode = domNode
   * }
   */

  // Render...

  renderPopupsContainer() {
    const { containerId } = config.popups
    const className = cnPopupsContainer(null, [this.props.className/* , cnPopupsContainer('TransitionGroup') */])
    const renderProps = {
      key: containerId || 'PopupsContainer',
      id: containerId,
      className,
      // ref: this.setDomRef, // UNUSED: Using (deprecated!) `findDOMNode` in `componentDidMount` (see above)
      // style: { border: '10px solid blue' }, // DEBUG
    }
    /* // TRY: css-transitions
     * <TransitionGroup className={cnPopupsContainer('TransitionGroup')}>
     *   <CSSTransition
     *     key={id}
     *     timeout={5000}
     *     // timeout={config.css.animateTimeout}
     *     classNames={cnPopupsContainer('Transition')}
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
      <div {...renderProps}>
        <div>xxx</div>
      </div>

    )
  }

  render() {
    const node = document.body
    return (
      <Portal node={node}>
        {this.renderPopupsContainer()}
      </Portal>
    )
  }

}

export default PopupsContainer

// TODO!
// export const registerModalComponent
// export const registerPopupComponent
