import React from 'react'
import * as Material from '@material-ui/core'

import Owl from 'core/layout/navbar/logo/icons8-owl-100.png'
import { useStyles } from 'core/layout/navbar/logo/styles'
import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'

export const LogoPhone = () => <Material.Grid item>
  <Material.Box>
    <img src={Owl} alt={'logo'} className={useStyles().phone} onClick={useNavigation('/')} />
  </Material.Box>
</Material.Grid>
