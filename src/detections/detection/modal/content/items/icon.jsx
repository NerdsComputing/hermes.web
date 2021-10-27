import React from 'react'
import { Grid } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

import { useStyles } from 'detections/detection/modal/content/items/style'

export const Icon = () => <Grid item xs={1} style={{ margin: 'auto 0' }}>
  <CheckIcon color={'primary'} classes={useStyles()} style={{ width: '24px', height: '24px' }} />
</Grid>
