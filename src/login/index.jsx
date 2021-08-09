import React from 'react'
import * as Material from '@material-ui/core'

import { Menu } from 'login/menu'
import { Context, useDefaultContext } from 'login/context'

export const Login = () => <Material.Grid item sm={4} md={3} lg={2}>
  <Context.Provider value={useDefaultContext()}>
    <Menu />
  </Context.Provider>
</Material.Grid>
