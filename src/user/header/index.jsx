import React from 'react'

import { Grid } from '@material-ui/core'

import { Title } from 'user/header/title'
import { TableHeader } from 'user/header/table-header'

export const Header = () => <Grid container spacing={2}>
  <Title />
  <TableHeader />
</Grid>

