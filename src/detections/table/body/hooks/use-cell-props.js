import { useMediaQuery, useTheme } from '@material-ui/core'

export const useCellProps = ({ hideOnMobile }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return {
    align: 'center',
    ...isMobile && hideOnMobile ? { style: { display: 'none' } } : {},
  }
}
