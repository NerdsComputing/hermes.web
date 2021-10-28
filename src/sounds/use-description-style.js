import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopDescriptionStyle } from 'sounds/use-desktop-description-style'
import { useMobileDescriptionStyle } from 'sounds/use-mobile-description-style'

export const useDescriptionStyle = () => {
  const theme = useTheme()
  const desktopDescriptionStyle = useDesktopDescriptionStyle()
  const mobileDescriptionStyle = useMobileDescriptionStyle()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktop ? desktopDescriptionStyle : mobileDescriptionStyle
}
