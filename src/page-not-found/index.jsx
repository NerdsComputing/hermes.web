import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import pig from 'page-not-found/pig.jpg'
import { useStyles } from 'page-not-found/style'
import { useProps } from 'page-not-found/use-props'

export const PageNotFound = () => <Grid {...useProps()}>
  <img src={pig} />
  <Typography variant={'overline'} className={useStyles().textSize}>Oh, no! Page not found.</Typography>
</Grid>
