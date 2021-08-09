import React from 'react'
import * as Material from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/links/styles'
import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'

export const NavigateToDetections = () => <Material.Grid item>
  <Material.Box px={2}>
    <Material.Link onClick={useNavigation('/detections')} variant={'h6'} classes={useStyles()}>
      Detections
    </Material.Link>
  </Material.Box>
</Material.Grid>
