import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from 'detections/detection/modal/content/items/style'
import dateIcon from 'detections/detection/modal/content/datetime/schedule_black_24dp.svg'

export const Icon = () => <Grid item xs={1} style={{ margin: 'auto 0' }}>
  <img src={dateIcon} alt={'Date icon'} className={useStyles().root} style={{ width: '24px', height: '24px' }} />
</Grid>
