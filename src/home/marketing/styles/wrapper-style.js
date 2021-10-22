import { useMediaQuery, useTheme } from '@material-ui/core'

import { useDesktopStyle } from 'home/marketing/styles/desktop-style'
import { useTabletStyle } from 'home/marketing/styles/tablet-style'

export const useWrapperStyle = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const desktopStyles = useDesktopStyle()
  const tabletStyles = useTabletStyle()

  return isDesktop ? desktopStyles : tabletStyles
}
