import React from 'react'

import { TablePagination } from '@material-ui/core'
import { useChangePage } from 'detections/table/pagination/hooks/use-change-page'
import { useChangeRowsPerPage } from 'detections/table/pagination/hooks/use-change-rows-per-page'
import { useContext } from 'detections/context'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const Pagination = () => {
  const { pageIndex, pageSize } = useContext()
  const count = useSelector(({ detections }) => get(detections, 'get.data.totalCount', []))

  return <TablePagination component={'div'} count={count} page={pageIndex}
                          rowsPerPage={pageSize}
                          onChangeRowsPerPage={useChangeRowsPerPage()}
                          onChangePage={useChangePage()} />
}
