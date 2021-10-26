import { useMediaQuery, useTheme } from '@material-ui/core'
import { useDesktopStyles } from 'cameras/map/sidebar/content/styles/desktop-styles'
import { useMobileStyles } from 'cameras/map/sidebar/content/styles/mobile-styles'

export const useStyles = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const desktopStyle = useDesktopStyles()
  const mobileStyle = useMobileStyles()

  return isDesktop ? desktopStyle : mobileStyle
}
