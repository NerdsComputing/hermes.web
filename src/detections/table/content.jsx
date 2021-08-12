import { Table, TableContainer } from '@material-ui/core'
import React from 'react'

import { useTableStyle } from 'detections/table/hooks/use-table-style'
import { Header } from 'detections/table/header'
import { TableContent } from 'detections/table/body'

export const Content = () => <TableContainer classes={useTableStyle()}>
  <Table stickyHeader>
    <Header />
    <TableContent />
  </Table>
</TableContainer>
