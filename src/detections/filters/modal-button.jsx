import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

import { ReactComponent as FilterSvg } from 'assets/filter.svg'
import { useStyle } from 'detections/filters/hooks/use-style'
import { useButton } from 'detections/filters/hooks/use-button'

export const ModalButton = () => <Grid container>
  <Button classes={useStyle()} onClick={useButton()}>
    <FilterSvg className={useStyle().changeColor} />
    <Typography> Filter </Typography>
  </Button>
</Grid>
