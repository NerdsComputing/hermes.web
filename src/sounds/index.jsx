import React from 'react'

import YouTube from 'react-youtube'
import { settings } from 'settings'
import { Intro } from 'sounds/intro'
import { Grid } from '@material-ui/core'

const Sounds = () => <>
  <Intro />
  <Grid container justify={'flex-end'} style={{ paddingRight: '300px', marginBottom: '80px' }}>
    <YouTube videoId={settings().sources[0]} />
  </Grid>
</>

export default Sounds
