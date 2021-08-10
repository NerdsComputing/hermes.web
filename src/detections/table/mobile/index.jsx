import React from 'react'
import * as Material from '@material-ui/core'
import { Hidden } from '@material-ui/core'

import { Content } from 'detections/table/mobile/content'
import { Pagination } from 'detections/table/pagination'

export const MobileTableDetections = () => <Material.Grid item>
  <Material.Grid container>
    <Hidden smUp>
      <Content />
      <Pagination />
    </Hidden>
  </Material.Grid>
</Material.Grid>
