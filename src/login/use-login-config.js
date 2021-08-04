import { useCallback } from 'react'

import { useContext } from 'login/context'
import { refreshedtoken } from 'login/refresh-token'
import { useSettings } from 'settings/hooks/use-settings'

const useSuccess = () => {
  const { setUser } = useContext()

  return useCallback(handle => {
    setUser(handle)
    refreshedtoken(handle)
  }, [setUser])
}

const useFailure = () => {
  const { setUser } = useContext()

  return useCallback(handle => {
    setUser(handle)
  }, [setUser])
}

export const useLoginConfig = () => ({
  onSuccess: useSuccess(),
  clientId: useSettings().google.clientId,
  cookiePolicy: useSettings().google.cookiePolicy,
  onFailure: useFailure(),
})
