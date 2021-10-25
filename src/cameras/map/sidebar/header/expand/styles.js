import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyles } from 'cameras/map/sidebar/header/expand/styles/desktop-styles'
import { useMobileStyles } from 'cameras/map/sidebar/header/expand/styles/mobile-styles'

export const useStyles = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const desktopStyle = useDesktopStyles()
  const mobileStyle = useMobileStyles()

  return isDesktop ? desktopStyle : mobileStyle
}
