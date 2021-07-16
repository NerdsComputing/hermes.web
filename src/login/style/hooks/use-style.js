import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyles } from 'login/style/hooks/use-desktop-style'
import { useMobileStyles } from 'login/style/hooks/use-mobile-style'

export const useStyle = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const desktopScreen = useDesktopStyles()
  const mobileScreen = useMobileStyles()

  return matches ? desktopScreen : mobileScreen
}
