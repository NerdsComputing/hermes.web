import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { actions } from 'detections/fetch/slices/get'
import { labels } from 'detections/chart/labels.json'
import { byMode } from 'detections/chart/by-mode'

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

const useData = setState => {
  const x = useSelector(({ detections }) => get(detections, 'get.data.data.detections.items', []))
  useEffect(() => {
    byMode({ setState, mode: 'hours', detections: x })
  }, [setState, x])
}

const useInit = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.attempt({ pagination: { pageIndex: 0, pageSize: 1000 } }))
  }, [dispatch, actions])
}

export const Chart = () => {
  const [state, setState] = useState({})
  useData(setState)
  useInit()

  return <Grid item>
    <Bar width={'500px'} height={'500px'} options={{ maintainAspectRatio: false }} data={data(state, labels.days)} />
  </Grid>
}

