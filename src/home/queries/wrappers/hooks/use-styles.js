import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyle } from 'home/queries/wrappers/hooks/use-desktop-style'
import { useMobileStyle } from 'home/queries/wrappers/hooks/use-mobile-style'

export const useStyle = () => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))
  const desktopStyle = useDesktopStyle()
  const phoneStyle = useMobileStyle()

  return isMobile ? phoneStyle : desktopStyle
}
