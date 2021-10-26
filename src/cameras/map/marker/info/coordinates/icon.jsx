import React from 'react'
import { Grid } from '@material-ui/core'

import exploreIcon from 'cameras/map/marker/info/coordinates/explore_black_24dp.svg'

export const Icon = () => <Grid item style={{ margin: 'auto 0', height: 16, width: 13, padding: 0 }}>
  <img src={exploreIcon} alt={'Explore Icon'} style={{ width: 13, height: 16 }} />
</Grid>
