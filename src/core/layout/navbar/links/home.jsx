import React from 'react'
import * as Material from '@material-ui/core'

import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'
import { Line } from 'core/layout/navbar/links/line'
import { useHomeProps } from 'core/layout/navbar/links/hooks/use-home-props'

export const Home = () => <Material.Grid item>
  <Material.Box px={2} pl={4}>
    <Material.Link onClick={useNavigation('/')} {...useHomeProps()}>
      Hermes
    </Material.Link>
    <Line path={'/'} />
  </Material.Box>
</Material.Grid>
