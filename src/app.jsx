import React from 'react'
import { Provider } from 'react-redux'

import { Router } from 'startup/router'
import { createStore } from 'startup/create-store'

export const App = () => <Provider store={createStore()}>
  <Router />
</Provider>
