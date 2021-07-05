import React from 'react'
import { Box } from '@material-ui/core'

import { Content } from 'core/footer/content'
import { useStyles } from 'core/footer/styles'

export const Footer = () => <Box className={useStyles().footer} display={'flex'} justifyContent={'center'}
                                 alignItems={'center'}>
  <Content />
</Box>
