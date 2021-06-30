import React from 'react'

import { Typography } from '@material-ui/core'
import { useStyles } from 'navbar/style'

export const Email = () => {
  const classes = useStyles()

  return <Typography className={classes.email}>
    Welcome, email
  </Typography>
}
