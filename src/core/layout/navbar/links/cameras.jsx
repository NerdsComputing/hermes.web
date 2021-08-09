import React from 'react'
import { Link } from '@material-ui/core'

import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'
import { useStyles } from 'core/layout/navbar/links/styles'

export const NavigateToCameras = () => <Link onClick={useNavigation('/cameras')} variant={'h6'} classes={useStyles()}>
  Cameras
</Link>
