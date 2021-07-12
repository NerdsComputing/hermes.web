import { useMediaQuery, useTheme } from '@material-ui/core'

export const useDescription = person => {
  const theme = useTheme()
  const shouldUseFullDescription = useMediaQuery(theme.breakpoints.up('md'))

  return shouldUseFullDescription ? person.description : person.wrappedDescription
}
