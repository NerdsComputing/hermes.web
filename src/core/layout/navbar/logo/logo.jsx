import React from 'react'
import * as Material from '@material-ui/core'

import { useImgProps } from 'core/layout/navbar/logo/hooks/use-img-props'

export const Logo = () => <Material.Grid item>
  <Material.Box>
    <img {...useImgProps()} />
  </Material.Box>
</Material.Grid>
