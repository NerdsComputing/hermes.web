import { useCallback } from 'react'

import { useContext } from 'login/context'
import { useSettings } from 'settings/hooks/use-settings'

export const useSuccess = () => {
  const { setUser } = useContext()

  return useCallback(handle => {
    setUser(undefined)
  }, [setUser])
}

export const useLogoutConfig = () => ({
  clientId: useSettings().google.clientId,
  onLogoutSuccess: useSuccess(),
})

