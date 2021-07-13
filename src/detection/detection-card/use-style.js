import { useMediaQuery, useTheme } from '@material-ui/core'

import { useStyles } from 'detection/detection-card/style'

export const useStyle = () => {
  const theme = useTheme()
  const { desktopScreen } = useStyles()
  const { mobileScreen } = useStyles()
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktopScreen ? desktopScreen : mobileScreen
}
