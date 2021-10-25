import React from 'react'
import { IconButton } from '@material-ui/core'

import { useExpandClick } from 'cameras/map/sidebar/header/expand/hooks/use-expand-click'
import { useStyles } from 'cameras/map/sidebar/header/expand/styles'
import { Icon } from 'cameras/map/sidebar/header/expand/icon'

export const Expand = () => <IconButton classes={useStyles()} onClick={useExpandClick()}>
  <Icon />
</IconButton>
