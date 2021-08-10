import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { useStyles } from 'home/marketing/upper-side/style'
import { Paragraph } from 'home/marketing/upper-side/paragraph'

export const UpperContent = () => <Grid item>
  <Grid container className={useStyles().display}>
    <Box px={3}>
      <img src={'https://via.placeholder.com/150'} alt={'marketing'} className={useStyles().floatImage} />
    </Box>
  </Grid>
  <Paragraph />
</Grid>
