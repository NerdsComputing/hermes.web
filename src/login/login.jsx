import React from 'react'

import { Context, useDefaultContext } from 'login/context'
import { LoginMenu } from 'login/login-menu'

export const Login = () => <Context.Provider value={useDefaultContext()}>
  <LoginMenu />
</Context.Provider>
