import React from 'react'
import { Route } from 'react-router-dom'

import { routes } from 'startup/routes'

export const Mapping = () => routes.map(route => <Route path={route.path} key={route.path} exact>
  <route.Component />
</Route>)

