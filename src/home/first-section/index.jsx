import React from 'react'
import { Grid } from '@material-ui/core'

import { Title } from 'home/first-section/title'
import { Description } from 'home/first-section/description'
import { Live } from 'home/first-section/live'
import { Link } from 'home/first-section/link'
import { useStyle } from 'home/first-section/hooks/use-style'

export const HeadingSection = () => <Grid classes={useStyle()}>
  <Grid container justify={'left'}>
    <Title />
    <Description />
    <Live />
    <Link />
  </Grid>
</Grid>
