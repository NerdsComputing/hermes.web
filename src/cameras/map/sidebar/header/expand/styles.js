import { useMediaQuery, useTheme } from '@material-ui/core'

import { useOpacity } from 'cameras/map/sidebar/header/expand/use-opacity'

export const useStyles = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const desktopStyle = useOpacity(0)()
  const mobileStyle = useOpacity(1)()

  return isDesktop ? desktopStyle : mobileStyle
}
