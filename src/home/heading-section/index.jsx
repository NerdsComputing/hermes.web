import React from 'react'
import { Grid } from '@material-ui/core'

import { Title } from 'home/heading-section/title'
import { Description } from 'home/heading-section/description'
import { Live } from 'home/heading-section/live'
import { Link } from 'home/heading-section/link'
import { useStyle } from 'home/heading-section/hooks/use-style'

export const HeadingSection = () => <Grid classes={useStyle()}>
  <Grid container justify={'left'}>
    <Title />
    <Description />
    <Live />
    <Link />
  </Grid>
</Grid>
