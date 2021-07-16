import React from 'react'
import { Provider } from 'react-redux'

import { Router } from 'startup/router'
import { configureStore } from 'startup/create-store'

export const App = () => <Provider store={configureStore()}>
  <Router />
</Provider>
