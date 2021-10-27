import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { useFilterDetectionsProps } from 'detections/filters/accordion-actions/use-filter-detections-props'
import { useButtonStyle } from 'detections/filters/accordion-actions/use-button-style'
import { useOnClose } from 'detections/filters/accordion-actions/use-on-close'

export const FilterDetections = () => <Grid item classes={useButtonStyle()}>
  <Button {...useFilterDetectionsProps()} onClick={useOnClose()}>
    <SearchIcon />
    <Typography>Search</Typography>
  </Button>
</Grid>
