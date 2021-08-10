import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Grid, makeStyles } from '@material-ui/core'

const root = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '300px',
}

const useStyles = makeStyles({ root })

export const CircularIndeterminate = () => <Grid item classes={useStyles()}>
  <CircularProgress />
  <CircularProgress color={'secondary'} />
</Grid>
