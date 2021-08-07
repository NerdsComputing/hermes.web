import React from 'react'
import { Link } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/navigation/detections/styles'
import { useNavigation } from 'core/layout/navbar/navigation/hooks/use-navigation'

export const NavigateToDetections = () => <Link onClick={useNavigation('/detections')}
                                                variant={'h6'} classes={useStyles()}>
  Detections
</Link>
