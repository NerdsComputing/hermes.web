import React from 'react'
import { Grid, Link } from '@material-ui/core'

import { useStyle } from 'home/first-section/link/style'
import LinkIcon from 'home/first-section/link/link_black_24dp.svg'
import { useStyles } from 'core/layout/footer/content/style'

export const Content = () => <Grid item>
  <p className={useStyle().contentFirst}>git clone </p>
  <p className={useStyle().contentSecond}>git@github.com:nerds-sh/hermes.cam.git </p>
  <Link href={'https://github.com/nerds-sh/hermes.web'}>
    <img src={LinkIcon} alt={'link'} className={useStyles().image} />
  </Link>
</Grid>
