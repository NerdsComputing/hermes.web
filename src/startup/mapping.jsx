import React from 'react'
import { Route } from 'react-router-dom'

import { routes } from 'startup/routes'

export const Mapping = () => <>
  {
    routes.map(route => <Route exact path={route.path} key={route.path}>
      <route.Component />
    </Route>)
  }
</>
