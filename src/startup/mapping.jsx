import { routes } from 'startup/routes'
import { Route } from 'react-router-dom'
import React from 'react'

export const Mapping = () => <>
  {
    routes.map((route, index) => <Route path={route.Path} key={index}>
      <route.Component />
    </Route>)
  }
</>

