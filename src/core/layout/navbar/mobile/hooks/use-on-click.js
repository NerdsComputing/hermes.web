import { useContext } from 'core/layout/navbar/context'
import { useCallback } from 'react'

export const useOnClick = () => {
  const { setMobileOpen } = useContext()

  return useCallback(() => {
    setMobileOpen(true)
  }, [setMobileOpen])
}
