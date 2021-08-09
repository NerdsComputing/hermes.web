import React from 'react'
import { Grid } from '@material-ui/core'

import { Title } from 'home/marketing/title'
import { Content } from 'home/marketing/content'

export const Marketing = () => <Grid container justify={'center'}>
  <Title />
  <Content />
</Grid>
