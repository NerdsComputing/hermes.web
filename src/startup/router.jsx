import React from 'react'
import { BrowserRouter as Router1, Switch } from 'react-router-dom'
import { Mapping } from 'startup/mapping'

export const Router = () => (
  <Router1>
    <Switch>
      <Mapping />
    </Switch>
  </Router1>
)
