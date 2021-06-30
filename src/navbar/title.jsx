import React from 'react'

import { Typography } from '@material-ui/core'
import { useStyles } from 'navbar/style'

export const Title = () => {
  const classes = useStyles()

  return <Typography variant={'h6'} className={classes.title}>
    Hermes
  </Typography>
}
