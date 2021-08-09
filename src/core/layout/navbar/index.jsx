import React from 'react'

import { useDefaultContext, Context } from 'core/layout/navbar/context'
import { DesktopNavbar } from 'core/layout/navbar/desktop'
import { MobileNavbar } from 'core/layout/navbar/mobile/mobile'

export const Navbar = () => <Context.Provider value={useDefaultContext()}>
  <>
    <DesktopNavbar />
    <MobileNavbar />
  </>
</Context.Provider>

