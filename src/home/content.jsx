import React from 'react'
import { Grid } from '@material-ui/core'

import { Marketing } from 'home/marketing'
import { MeetTeam } from 'home/meet-team'
import { CharacterSection } from 'home/character-section'
import { HeadingSection } from 'home/heading-section'

export const Content = () => <Grid container>
  <HeadingSection />
  <CharacterSection />
  <Grid item>
    <Marketing />
    <MeetTeam />
  </Grid>
</Grid>
