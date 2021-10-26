import React from 'react'
import { Box } from '@material-ui/core'

import { Wrapper } from 'cameras/wrapper'
import { Map } from 'cameras/map'
import { Livestream } from 'cameras/livestream'
import { useLivestreamPadding } from 'cameras/hooks/use-livestream-padding'

export const Content = () => <Wrapper>
  <Box pt={3} width={'100%'} height={'100%'}>
    <Map />
  </Box>
  <Box pt={3} {...useLivestreamPadding()}>
    <Livestream />
  </Box>
</Wrapper>

