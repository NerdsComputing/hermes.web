import React from 'react'
import { Grid } from '@material-ui/core'

import { Marketing } from 'home/marketing'
import { MeetTeam } from 'home/meet-team'
import { useGridStyle } from 'home/first-section/hooks/use-grid-style'
import { HeadingSection } from 'home/first-section'

export const Content = () => <Grid container>
  <HeadingSection />
  <Grid item justify={'left'} classes={useGridStyle()}>
    <Marketing />
    <MeetTeam />
  </Grid>
</Grid>
