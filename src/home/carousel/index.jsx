import React from 'react'
import { Grid } from '@material-ui/core'

import { Slider } from 'home/slider'
import { Arrow } from 'home/arrows/arrow'
import { useStyle } from 'home/carousel/style'

export const Carousel = () => <Grid item className={useStyle().carousel}>
  <Arrow direction={'left'} />
  <Slider />
  <Arrow direction={'right'} />
</Grid>
