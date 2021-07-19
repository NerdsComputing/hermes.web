import React from 'react'
import { Grid } from '@material-ui/core'

import { TableHeader } from 'user/header/table-header'
import { Title } from 'user/header/title'
import { useGridStyles } from 'user/header/hooks/use-grid-styles'

export const Header = () => <Grid container spacing={2} classes={useGridStyles()}>
  <Title />
  <TableHeader />
</Grid>

