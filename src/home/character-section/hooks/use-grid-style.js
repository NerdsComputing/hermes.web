import { useMediaQuery, useTheme } from '@material-ui/core'
import { useDesktopStyle } from 'home/character-section/hooks/use-desktop-style'
import { usePhoneStyle } from 'home/character-section/hooks/use-phone-style'

export const useGridStyle = () => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))
  const desktopStyle = useDesktopStyle()
  const phoneStyle = usePhoneStyle()

  return isMobile ? phoneStyle : desktopStyle
}
