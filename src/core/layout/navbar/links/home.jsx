import React from 'react'
import * as Material from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/links/styles'
import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'

export const Home = () => <Material.Grid item>
  <Material.Box px={2} pl={4}>
    <Material.Link onClick={useNavigation('/')} variant={'h6'} classes={useStyles()}>
      Hermes
    </Material.Link>
  </Material.Box>
</Material.Grid>
