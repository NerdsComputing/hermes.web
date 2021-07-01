import React from 'react'
import { AppBar, Grid } from '@material-ui/core'

import { Title } from 'navbar/title'
import { UserContent } from 'navbar/user-content'
import { useStyles } from 'navbar/style'

export const Navbar = () => <AppBar position={'static'}>
  <Grid container className={useStyles().root} alignContent={'center'}>
    <Title />
    <UserContent />
  </Grid>
</AppBar>
