import { useCallback } from 'react'

import { Refreshtoken } from 'login/refresh-token'
import { useContext } from 'login/context'

export const clientId = '147813579094-8qbv6canv6167qlga4k9788dg0qmgokn.apps.googleusercontent.com'

export const cookiePolicy = 'single_host_origin'

export const onSuccess = {}

const useSuccess = () => {
  const { setUser } = useContext()

  return useCallback(handle => {
    console.log(handle)
    setUser(handle)
    Refreshtoken(handle)
  }, [setUser])
}

export const onFailure = handle => {
  console.log('[Login failed] response:', handle)
}

export const useConfig = () => ({
  onSuccess: useSuccess(),
  clientId,
  cookiePolicy,
  onFailure,
})

