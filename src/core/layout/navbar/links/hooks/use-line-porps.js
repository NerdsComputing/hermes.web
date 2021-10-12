import { useLocation } from 'react-router-dom'

import { useShowLine } from 'core/layout/navbar/links/hooks/use-show-line'
import { useHideLine } from 'core/layout/navbar/links/hooks/use-hide-line'

export const useLineProps = path => {
  const location = useLocation()
  const showLine = useShowLine()
  const hideLine = useHideLine()

  return location.pathname === path ? showLine : hideLine
}
