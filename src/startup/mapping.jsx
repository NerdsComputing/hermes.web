import React from 'react'

import { routes } from 'startup/routes'
import { Route } from 'react-router-dom'

export const Mapping = () => <>
  {
    routes.map((route, path) => <Route path={route.path} key={path}>
      <route.Component />
    </Route>)
  }
</>

