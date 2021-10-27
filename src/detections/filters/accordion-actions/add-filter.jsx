import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { useAddFilterProps } from 'detections/filters/accordion-actions/use-add-filter-props'
import { useButtonStyle } from 'detections/filters/accordion-actions/use-button-style'

export const AddFilter = () => <Grid item classes={useButtonStyle()}>
  <Button {...useAddFilterProps()}>
    <AddIcon />
    <Typography>Add Filter</Typography>
  </Button>
</Grid>
