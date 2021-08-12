import React from 'react'
import { Grid } from '@material-ui/core'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

import { useData } from 'detections/chart/hooks/use-data'

export const BarChart = ({ mode }) => <Grid item>
  <Bar width={'500px'} height={'500px'} options={{ maintainAspectRatio: false }} data={useData(mode)} />
</Grid>

BarChart.propTypes = { mode: PropTypes.string.isRequired }
