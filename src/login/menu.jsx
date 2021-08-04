import React from 'react'

import { useContext } from 'login/context'
import { Button } from 'login/login-button'

export const Menu = () => {
  const { user } = useContext()

  return <div>
    <Button user={user} />
  </div>
}
