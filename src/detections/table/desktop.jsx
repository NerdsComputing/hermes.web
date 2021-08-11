import React from 'react'
import { Hidden } from '@material-ui/core'

import { Content } from 'detections/table/content'
import { Pagination } from 'detections/table/pagination'

export const DesktopVersion = () => <Hidden xsDown>
  <Content />
  <Pagination />
</Hidden>
