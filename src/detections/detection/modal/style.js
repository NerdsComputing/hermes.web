import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyles } from 'detections/detection/modal/styles/desktop-styles'
import { useMobileStyles } from 'detections/detection/modal/styles/mobile-styles'

export const useStyles = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const desktopStyle = useDesktopStyles()
  const mobileStyle = useMobileStyles()

  return isDesktop ? desktopStyle : mobileStyle
}
