import { useLeftDesktopStyle } from 'home/character-section/characters/character/text/styles/use-left-desktop-style'
import { useLeftTabletStyle } from 'home/character-section/characters/character/text/styles/use-left-tablet-style'
import { usePhoneStyle } from 'home/character-section/characters/character/text/styles/use-phone-style'

export const useProperLeftStyle = () => ({
  desktop: useLeftDesktopStyle(),
  tablet: useLeftTabletStyle(),
  phone: usePhoneStyle(),
})
