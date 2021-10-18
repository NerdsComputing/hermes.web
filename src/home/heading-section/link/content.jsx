import React from 'react'
import { Grid, Link, Typography } from '@material-ui/core'

import { useTitleStyle } from 'home/heading-section/link/hooks/use-content-first-style'
import LinkIcon from 'home/heading-section/link/link_black_24dp.svg'
import { useStyles } from 'core/layout/footer/content/style'
import { useContentStyle } from 'home/heading-section/link/hooks/use-content-style'

export const Content = () => <Grid item>
  <Typography classes={useTitleStyle()} color={'primary'}>git clone </Typography>
  <Typography classes={useContentStyle()} color={'primary'}>git@github.com:nerds-sh/hermes.cam.git </Typography>
  <Link href={'https://github.com/nerds-sh/hermes.web'}>
    <img src={LinkIcon} alt={'link'} className={useStyles().image} />
  </Link>
</Grid>
