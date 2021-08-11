import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from 'react-youtube'
import * as Material from '@material-ui/core'

import { settings } from 'settings'
import { useStyles } from 'cameras/style'

export const Content = () => <Grid item xs={12} md={9}>
  <Grid container justify={'center'} classes={useStyles()}>
    <YouTube videoId={settings().sources[0]} />
  </Grid>
</Grid>
import { Map } from 'cameras/map'

export const Content = () => <Material.Grid item xs={12} sm={11} md={8} lg={8}>
  <Material.Box pt={3} style={{ height: '80vh', width: '100%' }}>
    <Map />
  </Material.Box>
</Material.Grid>
