import React from 'react'
import { Grid } from '@material-ui/core'

import { Live } from 'home/live'
import { Title } from 'home/title'
import { useStyles } from 'home/style'
import { Carousel } from 'home/carousel'
import { Marketing } from 'home/marketing'

export const Content = () => <Grid container alignItems={'center'} justify={'center'} className={useStyles().align}>
  <Title />
  <Carousel />
  <Live />
  <Marketing />
</Grid>
