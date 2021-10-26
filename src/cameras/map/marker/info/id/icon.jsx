import React from 'react'
import { Grid } from '@material-ui/core'

import pinIcon from 'cameras/map/marker/info/id/pin_black_24dp.svg'

export const Icon = () => <Grid item style={{ margin: 'auto 0', height: 16, width: 13, padding: 0 }}>
  <img src={pinIcon} alt={'Explore Icon'} style={{ width: 13, height: 16 }} />
</Grid>
