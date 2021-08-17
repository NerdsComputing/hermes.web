import React from 'react'
import YouTube from 'react-youtube'
import * as Material from '@material-ui/core'

import { Map } from 'cameras/map'
import { settings } from 'settings'
import { useStyles } from 'cameras/style'

export const Content = () => <Material.Grid item xs={12} sm={11} md={9} lg={8}>
  <Material.Box pt={3} style={{ height: '80vh', width: '100%' }}>
    <Map />
  </Material.Box>
  <Material.Grid container justify={'center'} classes={useStyles()}>
    <YouTube videoId={settings().sources[0]} />
  </Material.Grid>
</Material.Grid>

