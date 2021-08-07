import React from 'react'
import { Link } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/navigation/cameras/styles'
import { useNavigation } from 'core/layout/navbar/navigation/hooks/use-navigation'

export const NavigateToCameras = () => <Link onClick={useNavigation('/cameras')} variant={'h6'} classes={useStyles()}>
  Cameras
</Link>
