import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useStyles } from 'detections/detection/modal/title/style'

export const Title = ({ title }) => <Typography variant={'h4'} color={'primary'} classes={useStyles()}>
  {title}
</Typography>

Title.propTypes = { title: PropTypes.string.isRequired }
