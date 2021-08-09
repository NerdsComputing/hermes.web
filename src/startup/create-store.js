import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from 'startup/root-reducer'
import { rootEpic } from 'startup/root-epic'

export const configureStore = () => {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)))
  epicMiddleware.run(rootEpic)

  return store
}
