import React from 'react'
import { Box } from '@material-ui/core'

import { Content } from 'core/layout/footer/content'
import { useStyles } from 'core/layout/footer/style'

export const Footer = () => <Box className={useStyles().root} display={'flex'} justifyContent={'center'}
                                 alignItems={'center'}>
  <Content />
</Box>
