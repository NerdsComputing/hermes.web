import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Layout } from 'core/layout/layout'

export const Provider = ({ children }) => <BrowserRouter>
  <Layout>
    <Switch>
      {children}
    </Switch>
  </Layout>
</BrowserRouter>

Provider.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
