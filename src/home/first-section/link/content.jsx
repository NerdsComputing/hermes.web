import React from 'react'
import { Grid, Link } from '@material-ui/core'

import { useContentFirstStyle } from 'home/first-section/link/hooks/use-content-first-style'
import LinkIcon from 'home/first-section/link/link_black_24dp.svg'
import { useStyles } from 'core/layout/footer/content/style'
import { useContentSecondStyle } from 'home/first-section/link/hooks/use-content-second-style'

export const Content = () => <Grid item>
  <p className={useContentFirstStyle().root}>git clone </p>
  <p className={useContentSecondStyle().root}>git@github.com:nerds-sh/hermes.cam.git </p>
  <Link href={'https://github.com/nerds-sh/hermes.web'}>
    <img src={LinkIcon} alt={'link'} className={useStyles().image} />
  </Link>
</Grid>
