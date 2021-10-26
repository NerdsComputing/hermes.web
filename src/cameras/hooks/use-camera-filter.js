import { useLocation } from 'react-router-dom'

import { useIndex } from 'cameras/hooks/use-index'

export const useCameraFilter = () => {
  const link = useLocation()
  const index = useIndex()
  const keys = link.search.split(/[?,&,=]/)

  return link.search && index > 0 ? [keys[index + 1]] : ['']
}
