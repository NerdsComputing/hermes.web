import React from 'react'
import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useStyles } from 'admin/body/style'

export const Alignment = ({ children }) => <Box classes={useStyles()}>
  <Grid container className={useStyles().alignment} spacing={'5'}>
    { children }
  </Grid>
</Box>
Alignment.propTypes = { children: PropTypes.object.isRequired }
