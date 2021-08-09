import React from 'react'
import { Box, Typography } from '@material-ui/core'

import { useHeaderStyle } from 'cameras/header/hooks/use-header-style'

export const Header = () => <Box pt={3}>
  <Typography variant={'h6'} classes={useHeaderStyle()}>Cameras</Typography>
</Box>
