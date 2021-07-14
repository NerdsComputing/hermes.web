import React from 'react'

import { Header } from 'user/header'
import { useStyle } from 'user/style'
import { TableRows } from 'user/table-rows'

export const User = () => <div className={useStyle().main}>
  <Header />
  <TableRows />
</div>
