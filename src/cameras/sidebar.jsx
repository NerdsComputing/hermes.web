import React from 'react'
import * as Material from '@material-ui/core'

import { Ids } from 'cameras/list'
import { Header } from 'cameras/header'

export const Sidebar = () => <Material.Grid item xs={12} md={3}>
  <Header />
  <Ids />
</Material.Grid>
