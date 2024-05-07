import React from 'react'

export const Context = React.createContext<any>(null)

export const ContextProvider = Context.Provider
export const ContextConsumer = Context.Consumer