import React, { useCallback } from 'react'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { useContext } from 'core/layout/navbar/context'
import { useStyles } from 'core/layout/navbar/responsive-drawer/style'

const useOnClick = () => {
  const { setMobileOpen } = useContext()

  return useCallback(() => {
    setMobileOpen(true)
  }, [setMobileOpen])
}

export const Icon = () => <IconButton aria-label={'open drawer'}
                                      edge={'start'}
                                      onClick={useOnClick()}
                                      className={useStyles().menuButton}>
  <MenuIcon />
</IconButton>
