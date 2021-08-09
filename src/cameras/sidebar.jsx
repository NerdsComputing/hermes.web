import * as Material from '@material-ui/core'
import { Header } from 'cameras/header'
import { Ids } from 'cameras/list'
import React from 'react'

export const Sidebar = () => <Material.Grid item xs={12} md={3}>
  <Header />
  <Ids />
</Material.Grid>
