import { useEffect } from 'react'

import { useGetDetections } from 'cameras/hooks/use-get-detections'

export const useFetchDetections = () => {
  const get = useGetDetections()

  useEffect(() => {
    get()
  }, [get])
}
