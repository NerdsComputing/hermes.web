import React from 'react'
import { Grid } from '@material-ui/core'

import { Login } from 'login'
import { useHeaderStyle } from 'core/layout/navbar/header/hooks/use-header-style'
import { HeaderLinks } from 'core/layout/navbar/header/header-links'

export const Header = () => <Grid item container xs={12} sm={8} md={9} lg={10} classes={useHeaderStyle()}>
  <HeaderLinks />
  <Login />
</Grid>

