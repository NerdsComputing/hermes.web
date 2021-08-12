import { useMediaQuery, useTheme } from '@material-ui/core'

import { desktopStyles } from 'detections/filters/desktop-style'
import { mobileStyles } from 'detections/filters/mobile-style'

export const useStyles = () => {
  const theme = useTheme()
  const desktopScreen = desktopStyles()
  const mobileScreen = mobileStyles()
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktopScreen ? desktopScreen : mobileScreen
}
