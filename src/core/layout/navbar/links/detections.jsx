import React from 'react'
import * as Material from '@material-ui/core'

import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'
import { Line } from 'core/layout/navbar/links/line'
import { useDetectionsProps } from 'core/layout/navbar/links/hooks/use-detections-props'

export const NavigateToDetections = () => <Material.Grid item>
  <Material.Box px={2}>
    <Material.Link onClick={useNavigation('/detections')} {...useDetectionsProps()}>
      Detections
    </Material.Link>
    <Line path={'/detections'} />
  </Material.Box>
</Material.Grid>
