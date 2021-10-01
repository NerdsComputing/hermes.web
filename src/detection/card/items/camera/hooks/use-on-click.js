import { useCallback } from 'react'

import { useNavigation } from 'detections/table/hooks/use-navigation'
import { useItem } from 'detection/card/use-item'

export const useOnClick = () => {
  const items = useItem()
  const navigate = useNavigation(`/cameras?id=${items.camera.id}`)

  return useCallback(navigate, [navigate])
}
