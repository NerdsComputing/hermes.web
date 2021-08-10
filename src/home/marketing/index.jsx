import React from 'react'
import { Grid } from '@material-ui/core'

import { Title } from 'home/marketing/title'
import { LeftContent } from 'home/marketing/left-side'
import { RightContent } from 'home/marketing/right-side'

export const Marketing = () => <Grid item container justify={'center'} alignItems={'center'}>
  <Title />
  <LeftContent />
  <RightContent />
</Grid>
