import React from 'react'

import { Context, useDefaultContext } from 'login/context'
import { Menu } from 'login/menu'

export const Login = () => <Context.Provider value={useDefaultContext()}>
  <Menu />
</Context.Provider>
