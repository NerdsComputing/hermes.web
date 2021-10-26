import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/marker/info/text/style'

export const Text = ({ title, value }) => <Grid item className={useStyles().text}>
  <Typography varaint={'body1'} color={'primary'} className={useStyles().title}>{`${title}:`}</Typography>
  <Typography variant={'body1'} color={'primary'} align={'center'} className={useStyles().coordinate}>
    {`${value}`}
  </Typography>
</Grid>

Text.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}
