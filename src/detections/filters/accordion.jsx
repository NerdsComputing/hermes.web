import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useStyles } from 'detections/filters/accordion-style'
import { Details } from 'detections/filters/accordion-details'
import { Actions } from 'detections/filters/accordion-actions'

export const Accordion = () => <Grid classes={useStyles()}>
  <Typography variant={'h4'} className={useStyles().title}>Filters</Typography>
  <Details />
  <Actions />
</Grid>
