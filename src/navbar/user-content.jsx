import React from 'react'
import { Grid } from '@material-ui/core'

import { Gravatar } from 'navbar/gravatar'
import { Email } from 'navbar/email'
import { useStyles } from 'navbar/style'

export const UserContent = () => <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
  <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'} className={useStyles().userContent}>
    <Email />
    <Gravatar />
  </Grid>
</Grid>
