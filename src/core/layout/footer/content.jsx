import React from 'react'

import { useStyles } from 'core/layout/footer/content/style'
import Heart from 'core/layout/icons/favorite_border_black_24dp.svg'
import { Link, Typography } from '@material-ui/core'

export const Content = () => <Typography className={useStyles().content}>
  Made with
  {' '}
  <img src={Heart} alt={'heart'} className={useStyles().image} />
  {' '}
  by
  <Link color={'inherit'} href={'/about'}> the Hermes team</Link>
</Typography>
