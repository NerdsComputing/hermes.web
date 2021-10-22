import { useMediaQuery, useTheme } from '@material-ui/core'

import { useItemDesktopStyle } from 'home/marketing/styles/item-desktop-style'
import { useItemTabletStyle } from 'home/marketing/styles/item-tablet-style'

export const useItemStyle = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const itemDesktopStyle = useItemDesktopStyle()
  const itemTabletStyle = useItemTabletStyle()

  return isDesktop ? itemDesktopStyle : itemTabletStyle
}
