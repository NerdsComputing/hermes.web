import { useLocation } from 'react-router-dom'

import { useActiveStyle } from 'core/layout/navbar/links/hooks/use-active-style'
import { useInactiveStyle } from 'core/layout/navbar/links/hooks/use-inactive-style'

export const useStyles = path => {
  const location = useLocation()
  const onPage = useActiveStyle()
  const outsidePage = useInactiveStyle()

  return path === location.pathname ? onPage : outsidePage
}
