import { useStyles } from 'core/layout/navbar/logo/styles'
import { useMediaQuery, useTheme } from '@material-ui/core'

export const useClassName = () => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'))
  const style = useStyles()

  return ({ className: isMobile ? style.phone : style.root })
}
