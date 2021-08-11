import React from 'react'
import { Grid } from '@material-ui/core'

import { Live } from 'home/live'
import { Title } from 'home/title'
import { Carousel } from 'home/carousel'
import { Marketing } from 'home/marketing'

export const Content = () => <Grid container alignItems={'center'} justify={'center'}>
  <Title />
  <Carousel />
  <Live />
  <Marketing />
</Grid>
