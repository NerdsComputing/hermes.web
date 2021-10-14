import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyle } from 'home/first-section/hooks/use-desktop-style'
import { usePhoneStyle } from 'home/first-section/hooks/use-phone-style'

export const useStyle = () => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))
  const desktopStyle = useDesktopStyle()
  const phoneStyle = usePhoneStyle()

  return isMobile ? phoneStyle : desktopStyle
}
