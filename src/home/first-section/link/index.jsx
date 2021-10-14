import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { Title } from 'home/first-section/link/title'
import { Content } from 'home/first-section/link/content'
import { useWrapperStyle } from 'home/first-section/link/hooks/use-wrapper-style'

export const Link = () => <Box classes={useWrapperStyle()}>
  <Grid item>
    <Title />
    <Content />
  </Grid>
</Box>
