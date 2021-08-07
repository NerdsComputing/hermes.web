import React from 'react'

import { useDefaultContext, Context } from 'core/layout/navbar/context'
import { MobileNavbar } from 'core/layout/navbar/responsive-drawer/mobile/mobile'
import { DesktopNavbar } from 'core/layout/navbar/responsive-drawer/desktop/desktop'

export const Navbar = () => <Context.Provider value={useDefaultContext()}>
  <>
    <DesktopNavbar />
    <MobileNavbar />
  </>
</Context.Provider>

