import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import pig from 'page-not-found/pig.jpg'
import { useStyles } from 'page-not-found/style'

export const PageNotFound = () => <Grid container justify={'center'} alignItems={'center'} direction={'column'}>
  <img src={pig} />
  <Typography variant={'overline'} classes={useStyles()}>Oh, no! Page not found.</Typography>
</Grid>
