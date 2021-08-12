import React from 'react'
import { Route } from 'react-router-dom'

import { routes } from 'startup/routes'
import { Layout } from 'core/layout/layout'
import { PageNotFound } from 'page-not-found'

export const Mapping = () => <Layout>
  {routes.map(route => <Route exact path={route.path} key={route.path}>
    <route.component />
  </Route>)}
  <Route path={'*'} component={PageNotFound} />
</Layout>
