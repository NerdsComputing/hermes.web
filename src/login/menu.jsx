import React from 'react'
import { Box } from '@material-ui/core'

import { useContext } from 'login/context'
import { Button } from 'login/login-button'

export const Menu = () => {
  const { user } = useContext()

  return <Box px={3}>
    <Button user={user} />
  </Box>
}
