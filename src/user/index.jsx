import React from 'react'
import { Grid } from '@material-ui/core'

import { Header } from 'user/header'
import { TableRows } from 'user/table-rows'
import { useMainStyles } from 'user/hooks/use-main-styles'

export const User = () => <Grid container classes={useMainStyles()}>
  <Header />
  <TableRows />
</Grid>
