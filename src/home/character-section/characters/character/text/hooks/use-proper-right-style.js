import { useRightDesktopStyle } from 'home/character-section/characters/character/text/styles/use-right-desktop-style'
import { useRightTabletStyle } from 'home/character-section/characters/character/text/styles/use-right-tablet-style'
import { usePhoneStyle } from 'home/character-section/characters/character/text/styles/use-phone-style'

export const useProperRightStyle = () => ({
  desktop: useRightDesktopStyle(),
  tablet: useRightTabletStyle(),
  phone: usePhoneStyle(),
})
