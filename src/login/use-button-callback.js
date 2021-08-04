import { useGoogleLogin, useGoogleLogout } from 'react-google-login'

import { useContext } from 'login/context'
import { useLoginConfig } from 'login/use-login-config'
import { useLogoutConfig } from 'login/use-logout-config'

export const useButtonCallback = () => {
  const { signIn } = useGoogleLogin(useLoginConfig())
  const { signOut } = useGoogleLogout(useLogoutConfig())
  const { user } = useContext()

  return user ? signOut : signIn
}
