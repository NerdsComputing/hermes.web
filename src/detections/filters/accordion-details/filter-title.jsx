import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export const FilterTitle = ({ title }) => <Grid item xs={12} sm={3} md={2} ls={2} xl={2}>
  <Typography variant={'h6'}>{title}</Typography>
</Grid>

FilterTitle.propTypes = { title: PropTypes.string.isRequired }
