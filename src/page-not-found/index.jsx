import React from 'react'
import { Box, Grid } from '@material-ui/core'
import pig from 'page-not-found/pig.jpg'

export const PageNotFound = () => <Grid container justify={'center'}>
  <Box display={'flex'} justifyContent={'center'}>
    <img src={pig} />
  </Box>
</Grid>

