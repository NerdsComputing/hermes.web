import React from 'react'
import { Grid } from '@material-ui/core'

import gravatar from 'admin/row/gravatar/gravatar.jpg'
import { useStyles } from 'admin/row/gravatar/style'

export const Gravatar = () => <Grid item lg={4}>
  <img src={gravatar} className={useStyles().root} />
</Grid>
