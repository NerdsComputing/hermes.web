import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyles } from 'about/persons/person/styles/desktop-style'
import { useMobileStyles } from 'about/persons/person/styles/mobile-style'

export const useStyles = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const desktopStyle = useDesktopStyles()
  const mobileStyle = useMobileStyles()

  return isDesktop ? desktopStyle : mobileStyle
}
