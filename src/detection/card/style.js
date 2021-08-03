import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyle } from 'detection/card/desktop-style'
import { useMobileStyle } from 'detection/card/mobile-style'

export const useStyles = () => {
  const theme = useTheme()
  const desktopScreen = useDesktopStyle()
  const mobileScreen = useMobileStyle()
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('sm'))

  return isDesktopScreen ? desktopScreen : mobileScreen
}
