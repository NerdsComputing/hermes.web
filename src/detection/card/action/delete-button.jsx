import React from 'react'
import { Button } from '@material-ui/core'

import { useStyles } from 'detection/card/action/button-style'

export const Delete = () => <Button variant={'contained'} classes={useStyles()}>
  Delete
</Button>
