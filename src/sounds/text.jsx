import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useDesktopTitleStyle } from 'sounds/use-desktop-title-style'
import { wolf } from 'sounds/wolf'
import { useDescriptionStyle } from 'sounds/use-description-style'
import { useStyle } from 'sounds/use-style'

export const Text = () => <Grid item xs={12} lg={6} sm={12} md={6} className={useStyle().text}>
  <Typography color={'primary'} classes={useDesktopTitleStyle()}>{wolf.title}</Typography>
  <Typography color={'primary'} classes={useDescriptionStyle()}>{wolf.description}</Typography>
</Grid>
