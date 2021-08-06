import React, { useCallback } from 'react'
import { Drawer } from '@material-ui/core'

import { useContext } from 'core/layout/navbar/context'
import { useStyles } from 'core/layout/navbar/responsive-drawer/drawer/style'
import { DrawerContent } from 'core/layout/navbar/responsive-drawer/drawer/drawer-content'

const useOnClose = () => {
  const { setMobileOpen } = useContext()

  return useCallback(() => {
    setMobileOpen(false)
  }, [setMobileOpen])
}

const useIsOpen = () => {
  const { mobileOpen } = useContext()

  return mobileOpen
}

export const DrawerComponent = () => <Drawer variant={'temporary'} anchor={'right'}
                                             open={useIsOpen()} onClose={useOnClose()}
                                             className={{ paper: useStyles().root }} ModalProps={{ keepMounted: true }}>
  <DrawerContent />
</Drawer>
