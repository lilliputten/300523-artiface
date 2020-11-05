/** @module demo
 *  @desc Demo app entry point
 *  @since 2020.05.19, 17:16
 *  @changed 2020.10.07, 00:11
 */

import 'es5-shim/es5-shim'
import 'es5-shim/es5-sham'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
// import { useState } from 'react'
// import { Fragment } from 'react'
import { render } from 'react-dom'

// import { injectGlobal } from 'react-emotion'
// import { compose, withState } from 'recompose'
// import { Transition } from 'react-spring/renderprops'
import { Manager, Reference, Popper, placements } from "react-popper"

// import { usePopper } from 'react-popper'

// import * as demoSupport from './demoSupport'

// Demo app styles
import './demo.pcss'

// import * as build from './build'
import './build'

 const content = (
  <Manager className="test-manager">
    <Reference>
      {({ ref }) => (
        <div ref={ref} className="test-wrapper">
          target
        </div>
      )}
    </Reference>
    <Popper
      // modifiers={popperModifiers}
      // placement={popperPlacement}
      // {...popperProps}
    >
      {({ ref, style, placement, arrowProps }) => (
          <div
            {...{ ref, style }}
            className="test-popper"
            data-placement={placement}
            // onKeyDown={popperOnKeyDown}
          >
            popper
          {/* React.cloneElement(popperComponent, { arrowProps }) */}
          </div>
      )}
    </Popper>

  </Manager>
 )

/*
 * const content = (
 *   <Main gradient="orange">
 *     <Manager>
 *       <Reference>
 *         {({ ref }) => (
 *           <ClickableReferenceBox
 *             tabIndex={0}
 *             innerRef={ref}
 *             onClick={() => togglePopper2(!isPopper2Open)}
 *           >
 *             Click to toggle
 *           </ClickableReferenceBox>
 *         )}
 *       </Reference>
 *       <Transition
 *         items={isPopper2Open}
 *         from={{ opacity: 0, rotation: '180deg', scale: 0.5, top: -20 }}
 *         enter={{ opacity: 1, rotation: '0deg', scale: 1, top: 0 }}
 *         leave={{ opacity: 0, rotation: '180deg', scale: 0.5, top: -20 }}
 *       >
 *         {show =>
 *           show ? ({ rotation, scale, opacity, top: topOffset }) => (
 *               <Popper
 *                 placement="bottom"
 *                 modifiers={animatedModifiers}
 *               >
 *                 {({
 *                   ref,
 *                   style: { top, left, position },
 *                   placement,
 *                   arrowProps,
 *                 }) => (
 *                   <PopperBox
 *                     innerRef={ref}
 *                     style={{
 *                       opacity,
 *                       top: 0,
 *                       left: 0,
 *                       position,
 *                       padding: '1em',
 *                       width: '10em',
 *                       transform: `translate3d(${left}px, ${top +
 *                         topOffset}px, 0) scale(${scale}) rotate(${rotation})`,
 *                       transformOrigin: 'top center',
 *                     }}
 *                   >
 *                     <a
 *                       href="https://github.com/drcmda/react-spring"
 *                       target="_blank"
 *                     >
 *                       react-spring
 *                     </a>
 *                     animated
 *                     <Arrow
 *                       innerRef={arrowProps.ref}
 *                       data-placement={placement}
 *                       style={arrowProps.style}
 *                     />
 *                   </PopperBox>
 *                 )}
 *               </Popper>
 *             )
 *           : Null}
 *       </Transition>
 *     </Manager>
 *   </Main>
 * )
 */

const demoContent = (
  <div className="demo">
    {content}
  </div>
)

render(demoContent, document.getElementById('root'))
