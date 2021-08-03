import React from 'react'
import { Provider } from 'react-redux'

import { Router } from 'startup/router'
import { configureStore } from 'startup/create-store'
import { Settings } from 'settings'

export const App = () => <Provider store={configureStore()}>
  <Settings>
    <Router />
  </Settings>
</Provider>
