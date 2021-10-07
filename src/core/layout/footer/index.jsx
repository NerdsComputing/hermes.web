import React from 'react'
import { Box } from '@material-ui/core'

import { Content } from 'core/layout/footer/content'
import { useFooterStyle } from 'core/layout/footer/use-footer-style'

export const Footer = () => <Box classes={useFooterStyle()} display={'flex'} justifyContent={'center'}
                                 alignItems={'center'}>
  <Content />
</Box>
