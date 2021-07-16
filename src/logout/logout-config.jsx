import { useCallback } from 'react'

import { useContext } from 'login/context'

export const clientId = '887902106704-jk4r0u9rkeu74mkd6sq6957qmpj51h1c.apps.googleusercontent.com'

export const useSuccess = () => {
  const { setUser } = useContext()

  return useCallback(handle => {
    console.log('[Logged out]', handle)
    setUser(undefined)
  }, [setUser])
}

export const useConfigLogout = () => ({
  clientId,
  onLogoutSuccess: useSuccess(),
})

