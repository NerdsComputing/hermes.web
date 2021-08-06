import React from 'react'
import { Link } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/navigation/detections/styles'
import { useNavigation } from 'core/layout/navbar/navigation/detections/hooks/use-navigation'

export const NavigateToDetections = () => <Link onClick={useNavigation()} variant={'h6'} className={useStyles().root}>
  Detections
</Link>
