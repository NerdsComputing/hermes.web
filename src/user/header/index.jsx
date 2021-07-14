import React from 'react'
import { Grid } from '@material-ui/core'

import { TableHeader } from 'user/header/table-header'
import { Title } from 'user/header/title'

export const Header = () => <Grid container spacing={2}>
  <Title />
  <TableHeader />
</Grid>

