import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detections/detection/modal/content/items/style'
import { useTextProps } from 'detections/detection/modal/content/camera/hooks/use-text-props'
import { useTextStyles } from 'detections/detection/modal/content/camera/text-style'

export const Text = ({ title, text }) => <Grid item xs={8}>
  <Typography variant={'h6'} color={'primary'} classes={useStyles()}>{title}</Typography>
  <Typography {...useTextProps()} classes={useTextStyles()}>{text}</Typography>
</Grid>

Text.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
