import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { Grid, Typography } from '@material-ui/core'

export const Error = () => <Grid container alignItems={'center'}>
  <HighlightOffIcon style={{ fontSize: 30 }} />
  <Typography style={{ display: 'inline' }}>Sorry, something went wrong</Typography>
</Grid>
