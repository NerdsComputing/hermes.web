import React from 'react'
import { Button, Grid } from '@material-ui/core'

import { useStyle } from 'detections/filters/hooks/use-style'
import { useButton } from 'detections/filters/hooks/use-button'

export const ModalButton = () => <Grid container>
  <Button classes={useStyle()} onClick={useButton()}>
    Filter
  </Button>
</Grid>
