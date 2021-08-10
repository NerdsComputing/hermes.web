import React from 'react'
import { Grid } from '@material-ui/core'
import { Bar } from 'react-chartjs-2'

import { useData } from 'detections/chart/use-data'

export const BarChart = () => <Grid item>
  <Bar width={'500px'} height={'500px'} options={{ maintainAspectRatio: false }} data={useData('days')} />
</Grid>
