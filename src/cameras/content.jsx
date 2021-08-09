import * as Material from '@material-ui/core'
import React from 'react'

export const Content = () => <Material.Grid item xs={12} md={9}>
  <Material.Box pt={3}>
    <Material.Typography align={'center'}>The content goes here...</Material.Typography>
  </Material.Box>
</Material.Grid>
