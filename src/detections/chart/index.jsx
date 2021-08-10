import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Grid } from '@material-ui/core'

import { useData } from 'detections/chart/use-data'
import { useInit } from 'detections/chart/use-init'

export const Chart = () => {
  useInit()

  return <Grid item>
    <Bar width={'500px'} height={'500px'} options={{ maintainAspectRatio: false }} data={useData('days')} />
  </Grid>
}

