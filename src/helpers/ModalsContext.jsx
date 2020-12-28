/** @module ModalsContext
 *  @class ModalsContext
 *  @since 2020.12.28, 02:07
 *  @changed 2020.12.28, 02:07
 */

import React from 'react'

export const ModalsContext = React.createContext()

export const ModalsContextProvider = ModalsContext.Provider
export const ModalsContextConsumer = ModalsContext.Consumer

export const withModalsContext = (WrappedComponent) => function withModalsContext(props) {
  return (
    <ModalsContextConsumer>
      {modalsContainerNode => {
        return (
          <WrappedComponent {...props} modalsContainerNode={modalsContainerNode} />
        )
      }}
    </ModalsContextConsumer>
  )
}
