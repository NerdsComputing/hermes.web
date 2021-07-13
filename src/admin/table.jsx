import React from 'react'
import { Grid, Paper, Table, TableContainer } from '@material-ui/core'

import { Head } from 'admin/head/head'
import { User } from 'admin/user'

export const MyTable = () => <Grid container justify={'center'}>
  <TableContainer component={Paper} style={{ maxWidth: '80%' }}>
    <Table>
      <Head />
      <User />
    </Table>
  </TableContainer>
</Grid>
