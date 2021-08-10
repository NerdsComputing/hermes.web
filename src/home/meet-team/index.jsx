import React from 'react'
import { Grid } from '@material-ui/core'

import { NavigationButton } from 'home/meet-team/navigation-button'

export const MeetTeam = () => <Grid container justify={'center'} alignItems={'center'}>
  <NavigationButton path={'/about'}>Meet our team</NavigationButton>
</Grid>
