import React from 'react'
import { Grid } from '@material-ui/core'

import { Gravatar } from 'navbar/gravatar'
import { Email } from 'navbar/email'
import { useStyles } from 'navbar/style'

export const UserContent = () => <Grid item xs={4} lg={6}>
  <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'} className={useStyles().userContent}>
    <Email />
    <Gravatar />
  </Grid>
</Grid>
