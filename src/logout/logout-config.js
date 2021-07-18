import { useCallback } from 'react'

import { useContext } from 'login/context'
import { clientId } from 'login/config'

export const useSuccess = () => {
  const { setUser } = useContext()

  return useCallback(handle => {
    setUser(undefined)
  }, [setUser])
}

export const useConfigLogout = () => ({
  clientId,
  onLogoutSuccess: useSuccess(),
})

