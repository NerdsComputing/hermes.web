import { useTheme, useMediaQuery } from '@material-ui/core'

import { useDesktopDescriptionStyle }
  from 'home/character-section/characters/character/text/content/styles/use-desktop-description-style'
import { useMobileDescriptionStyle }
  from 'home/character-section/characters/character/text/content/styles/use-mobile-description-style'

export const useDescriptionStyle = () => {
  const theme = useTheme()
  const desktopDescriptionStyle = useDesktopDescriptionStyle()
  const mobileDescriptionStyle = useMobileDescriptionStyle()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktop ? desktopDescriptionStyle : mobileDescriptionStyle
}
