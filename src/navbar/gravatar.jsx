import React from 'react'
import CodeIcon from '@material-ui/icons/Code'

import { useStyles } from 'navbar/style'

export const Gravatar = () => {
  const classes = useStyles()

  return <CodeIcon className={classes.gravatar} />
}
