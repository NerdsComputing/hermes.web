import React from 'react'
import { Route } from 'react-router-dom'

import { routes } from 'startup/routes'
import { Layout } from 'core/layout/layout'

export const Mapping = () => <Layout>
  {
    routes.map(route => <Route path={route.path} key={route.path} exact>
      <route.Component />
    </Route>)
  }
</Layout>

