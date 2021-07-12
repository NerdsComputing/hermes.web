import { useMediaQuery, useTheme } from '@material-ui/core'

export const useName = person => {
  const theme = useTheme()
  const shouldUseFullName = useMediaQuery(theme.breakpoints.up('md'))

  return shouldUseFullName ? person.name : person.firstName
}
