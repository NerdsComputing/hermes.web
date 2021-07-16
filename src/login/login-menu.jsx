import React from 'react'

import { useContext } from 'login/context'
import { LoginButton } from 'login/login-button'

export const LoginMenu = () => {
  const { user } = useContext()

  return <div>
    <LoginButton user={user} />
  </div>
}
