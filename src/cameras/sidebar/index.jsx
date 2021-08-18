import React from 'react'
import * as Material from '@material-ui/core'

import { Header } from 'cameras/sidebar/header'
import { Ids } from 'cameras/sidebar/ids'

export const Sidebar = () => <Material.Grid item xs={12} md={3}>
  <Header />
  <Ids />
</Material.Grid>
