import React from 'react'
import { Grid } from '@material-ui/core'

import { Title } from 'home/marketing/title'
import { UpperContent } from 'home/marketing/upper-side'
import { LowerContent } from 'home/marketing/lower-side'

export const Marketing = () => <Grid item xs={10} s={10} md={10} lg={10}>
  <Grid container justify={'center'} alignItems={'center'}>
    <Title />
    <UpperContent />
    <LowerContent />
  </Grid>
</Grid>
