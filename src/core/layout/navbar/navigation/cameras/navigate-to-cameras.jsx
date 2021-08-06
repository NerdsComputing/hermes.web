import React from 'react'
import { Link } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/navigation/cameras/styles'
import { useNavigation } from 'core/layout/navbar/navigation/cameras/hooks/use-navigation'

export const NavigateToCameras = () => <Link onClick={useNavigation()} variant={'h6'} className={useStyles().root}>
  Cameras
</Link>
