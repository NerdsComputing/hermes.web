import { useTheme, useMediaQuery } from '@material-ui/core'

export const useStyleCase = () => {
  const isDesktop = useMediaQuery(useTheme().breakpoints.up('md'))
  const isTablet = useMediaQuery(useTheme().breakpoints.between('sm', 'md'))

  return {
    [!!isDesktop]: 'desktop',
    [!!isTablet]: 'tablet',
  }
}
