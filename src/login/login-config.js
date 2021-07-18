import { useCallback } from 'react'

import { useContext } from 'login/context'
import { clientId, cookiePolicy } from 'login/config'
import { refreshedtoken } from 'login/refresh-token'

export const onSuccess = {}
export const onFailure = {}

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

export const useConfig = () => ({
  onSuccess: useSuccess(),
  clientId,
  cookiePolicy,
  onFailure: useFailure(),
})

