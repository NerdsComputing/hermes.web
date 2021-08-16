import React from 'react'
import { TablePagination } from '@material-ui/core'

import { useProps } from 'detections/table/pagination/hooks/use-props'

export const Pagination = () => <TablePagination {...useProps()} />

