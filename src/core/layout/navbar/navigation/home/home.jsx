import React from 'react'
import { Link } from '@material-ui/core'

import { useStyles } from 'core/layout/navbar/navigation/home/style'
import { useNavigation } from 'core/layout/navbar/navigation/home/hooks/use-navigation'

export const Home = () => <Link onClick={useNavigation()} variant={'h6'} className={useStyles().root}>
  Hermes
</Link>
