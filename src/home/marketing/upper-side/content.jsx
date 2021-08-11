import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

import { useStyles } from 'home/marketing/lower-side/style'
import { Paragraph } from 'home/marketing/upper-side/paragraph'

export const Content = () => <Grid item xs={12} sm={11} md={11} lg={10} className={useStyles().width}>
  <Box className={useStyles().box} whiteSpace={'normal'} textAlign={'center'}>
    <Typography paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore emagna aliqua.
    </Typography>
    <Paragraph />
  </Box>
</Grid>
