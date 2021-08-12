import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { Bar as ChartBar } from 'react-chartjs-2'

import { byMode } from 'detections/by-mode'
import { labels } from 'detections/labels.json'

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

export const Bar = () => {
  const [state, setState] = useState({})
  useData(setState)

  return <Grid item>
    <ChartBar width={'500px'} height={'500px'} options={{ maintainAspectRatio: false }}
              data={data(state, labels.days)} />
  </Grid>
}
