import React from 'react'
import { Provider } from 'react-redux'

import { Router } from 'startup/router'
import { configureStore } from 'startup/create-store'
import { Settings } from 'settings'
import { ThemeProvider } from '@material-ui/core'
import { theme } from 'theme'

export const App = () => <Provider store={configureStore()}>
  <Settings>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Settings>
</Provider>
