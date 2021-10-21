import { useTheme, useMediaQuery } from '@material-ui/core'

import { useDesktopTitleStyle }
  from 'home/character-section/characters/character/text/content/styles/use-desktop-title-style'
import { useMobileTitleStyle }
  from 'home/character-section/characters/character/text/content/styles/use-mobile-title-style'

export const useCharacterTitleStyle = () => {
  const theme = useTheme()
  const desktopTitleStyle = useDesktopTitleStyle()
  const mobileTitleStyle = useMobileTitleStyle()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktop ? desktopTitleStyle : mobileTitleStyle
}
