import React from 'react'
import * as Material from '@material-ui/core'

import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'
import { Line } from 'core/layout/navbar/links/line'
import { useCamerasProps } from 'core/layout/navbar/links/hooks/use-cameras-props'

export const NavigateToCameras = () => <Material.Grid item>
  <Material.Box px={2}>
    <Material.Link onClick={useNavigation('/cameras')} {...useCamerasProps()}>
      Cameras
    </Material.Link>
    <Line path={'/cameras'} />
  </Material.Box>
</Material.Grid>
