import React from 'react'

import { routes } from 'startup/routes'
import { Route } from 'react-router-dom'

export const Mapping = () => <>
  {
    routes.map(route => <Route path={route.path} key={route.path}>
      <route.Component />
    </Route>)
  }
</>

