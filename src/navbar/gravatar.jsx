import React from 'react'
import CodeIcon from '@material-ui/icons/Code'

import { useStyles } from 'header/style'

export const Gravatar = () => {
  const classes = useStyles()

  return <CodeIcon className={classes.gravatar} />
}
