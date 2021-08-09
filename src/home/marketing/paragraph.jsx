import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { ParagraphOne } from 'home/marketing/paragraph-one'
import { useStyles } from 'home/marketing/style'

export const Paragraph = () => <Grid item xs={12} sm={11} md={11} lg={10}>
  <Box className={useStyles().box} whiteSpace={'normal'}>
    <Typography paragraph align={'justify'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore emagna aliqua.
    </Typography>
    <ParagraphOne />
  </Box>
</Grid>
