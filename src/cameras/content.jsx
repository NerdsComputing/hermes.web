import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from 'react-youtube'

import { settings } from 'settings'
import { useStyles } from 'cameras/style'

export const Content = () => <Grid item xs={12} md={9}>
  <Grid container justify={'center'} classes={useStyles()}>
    <YouTube videoId={settings().sources[0]} />
  </Grid>
</Grid>
