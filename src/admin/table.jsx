import React from 'react'
import { Grid, Paper, Table as MaterialTable, TableContainer } from '@material-ui/core'

import { Head } from 'admin/head'
import { Body } from 'admin/body'

export const Table = () => <Grid container justify={'center'}>
  <TableContainer component={Paper} style={{ maxWidth: '80%' }}>
    <MaterialTable>
      <Head />
      <Body />
    </MaterialTable>
  </TableContainer>
</Grid>
