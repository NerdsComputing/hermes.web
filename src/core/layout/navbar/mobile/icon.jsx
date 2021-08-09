import React from 'react'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useStyles } from 'core/layout/navbar/mobile/style'
import { useProps } from 'core/layout/navbar/mobile/hooks/use-props'

export const Icon = () => <IconButton className={useStyles().menuButton} {...useProps()}>
  <MenuIcon />
</IconButton>
