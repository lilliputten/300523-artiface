/** @module ActionsContext
 *  @class ActionsContext
 *  @since 2020.12.24, 19:08
 *  @changed 2020.12.24, 19:08
 */

import React from 'react'

export const ActionsContext = React.createContext()

export const ActionsContextProvider = ActionsContext.Provider
export const ActionsContextConsumer = ActionsContext.Consumer

export const withActionsContext = (WrappedComponent) => function withActionsContext(props) {
  return (
    <ActionsContextConsumer>
      {actions => {
        return (
          <WrappedComponent {...props} actionsContextNode={actions} />
        )
      }}
    </ActionsContextConsumer>
  )
}
