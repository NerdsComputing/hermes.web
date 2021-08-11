import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { useStyles } from 'home/marketing/lower-side/style'
import { Content } from 'home/marketing/lower-side/content'

export const LowerContent = () => <Grid item>
  <Grid container className={useStyles().display}>
    <Box px={3}>
      <img src={'https://via.placeholder.com/150'} alt={'marketing'} className={useStyles().floatImage} />
    </Box>
  </Grid>
  <Content />
</Grid>
