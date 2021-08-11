import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Grid } from '@material-ui/core'

import { labels } from 'detections/labels.json'
import { byMode } from 'detections/by-mode'

const hours = state => Object.entries(state)
  .map(([key, value]) => ({
    label: key,
    data: value,
    backgroundColor: `#${((1 << 24) * Math.random() | 0).toString(16)}`,
  }))

const data = (state, label) => ({
  labels: label,
  datasets: hours(state),

})

const useData = setState => useEffect(() => {
  byMode(setState, 'hours')
}, [setState])

export const Content = () => {
  const [state, setState] = useState({})
  useData(setState)

  return <Grid item xs={12} sm={12} md={12} lg={12}>
    <Bar width={'500px'} height={'500px'}
         options={{ maintainAspectRatio: false }} data={data(state, labels.days)} />
  </Grid>
}
