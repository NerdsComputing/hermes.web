import React from 'react'
import { Typography } from '@material-ui/core'

import { useHeaderStyle } from 'cameras/map/sidebar/header/header-style'

export const Title = () => <Typography color={'primary'} classes={useHeaderStyle()}>Cameras</Typography>
