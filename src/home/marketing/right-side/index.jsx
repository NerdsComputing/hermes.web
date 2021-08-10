import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { Paragraph } from 'home/marketing/right-side/paragraph'
import { useStyles } from 'home/marketing/right-side/style'

export const RightContent = () => <Grid container className={useStyles().display}>
  <Grid item>
    <Box px={3}>
      <img src={'https://via.placeholder.com/150'} alt={'marketing'} className={useStyles().floatImage} />
    </Box>
  </Grid>
  <Paragraph />
</Grid>
