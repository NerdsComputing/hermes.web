import React from 'react'
import { Route } from 'react-router-dom'

import { routes } from 'startup/routes'
import { PageNotFound } from 'page-not-found'
import { Provider } from 'startup/provider'

export const Router = () => <Provider>
  {routes.map(route => <Route exact path={route.path} key={route.path}>
    <route.component />
  </Route>)}
  <Route component={PageNotFound} />
</Provider>
