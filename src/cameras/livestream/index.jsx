import React from 'react'
import { Grid } from '@material-ui/core'
import YouTube from 'react-youtube'

import { settings } from 'settings'
import { useLivestreamProps } from 'cameras/livestream/hooks/use-livestream-props'

export const Livestream = () => <Grid {...useLivestreamProps()}>
  <YouTube videoId={settings().sources[0]} />
</Grid>
