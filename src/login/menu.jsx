import React from 'react'
import { Box } from '@material-ui/core'

import { useContext } from 'login/context'
import { Button } from 'login/login-button'
import { useMenuProps } from 'login/hooks/use-menu-props'

export const Menu = () => {
  const { user } = useContext()

  return <Box {...useMenuProps()}>
    <Button user={user} />
  </Box>
}
