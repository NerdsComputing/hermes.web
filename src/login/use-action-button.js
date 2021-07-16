import { useGoogleLogin, useGoogleLogout } from 'react-google-login'

import { useContext } from 'login/context'
import { useConfigLogout } from 'logout/logout-config'
import { useConfig } from 'login/login-config'

export const useButtonAction = () => {
  const { signIn } = useGoogleLogin(useConfig())
  const { signOut } = useGoogleLogout(useConfigLogout())
  const { user } = useContext()

  return user ? signOut : signIn
}
