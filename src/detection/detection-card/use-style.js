import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyle } from 'detection/detection-card/desktop-style'
import { useMobileStyle } from 'detection/detection-card/mobile-style'

export const useStyle = () => {
  const theme = useTheme()
  const { root: desktopScreen } = useDesktopStyle()
  const { root: mobileScreen } = useMobileStyle()
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktopScreen ? desktopScreen : mobileScreen
}
