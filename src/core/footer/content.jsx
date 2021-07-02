import React from 'react'
import { Link, Typography } from '@material-ui/core'

import { useStyles } from 'core/footer/styles'

export const Content = () => <Typography className={useStyles().title}>
  Made with &#x2764; by
  <Link color={'inherit'} href={'/about'}> the Hermes team</Link>
</Typography>

