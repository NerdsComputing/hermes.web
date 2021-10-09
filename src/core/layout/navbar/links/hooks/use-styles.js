import { useLocation } from 'react-router-dom'

import { useOnPage } from 'core/layout/navbar/links/hooks/use-on-page'
import { useOutsidePage } from 'core/layout/navbar/links/hooks/use-outside-page'

export const useStyles = path => {
  const location = useLocation()
  const onPage = useOnPage()
  const outsidePage = useOutsidePage()

  return path === location.pathname ? onPage : outsidePage
}
