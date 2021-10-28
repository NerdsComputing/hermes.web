import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from 'react-youtube'
import { settings } from 'settings'
import { useStyle } from 'sounds/use-style'

export const Livestream = () => <Grid container justify={'flex-end'} className={useStyle().live}>
  <YouTube videoId={settings().sources[0]} />
</Grid>
