import { useCallback } from 'react'

import { useContext } from 'core/layout/navbar/context'

export const useOnClose = () => {
  const { setMobileOpen } = useContext()

  return useCallback(() => {
    setMobileOpen(false)
  }, [setMobileOpen])
}
