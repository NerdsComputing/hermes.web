import { useEffect } from 'react'

import { useResetDetections } from 'detections/hooks/use-reset-detections'
import { useGetDetections } from 'detections/hooks/use-get-detections'

export const usePaginatedQuery = () => {
  const reset = useResetDetections()
  const get = useGetDetections()

  useEffect(()=>{
    reset()
    get()
  },[reset, get])
}
