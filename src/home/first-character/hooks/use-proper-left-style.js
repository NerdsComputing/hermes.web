import { useLeftDesktopStyle } from 'home/first-character/styles/use-left-desktop-style'
import { useLeftTabletStyle } from 'home/first-character/styles/use-left-tablet-style'
import { usePhoneStyle } from 'home/first-character/styles/use-phone-style'

export const useProperLeftStyle = () => ({
  desktop: useLeftDesktopStyle(),
  tablet: useLeftTabletStyle(),
  phone: usePhoneStyle(),
})
