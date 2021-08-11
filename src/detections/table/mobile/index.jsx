import React from 'react'
import { Hidden } from '@material-ui/core'

import { Content } from 'detections/table/mobile/content'
import { Pagination } from 'detections/table/pagination'

export const MobileVersion = () => <Hidden smUp>
  <Content />
  <Pagination />
</Hidden>
