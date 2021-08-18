import { useEffect } from 'react'
import { useGetCameras } from 'cameras/hooks/use-get-cameras'
import { useResetCameras } from 'cameras/hooks/use-reset-cameras'

export const useFetchCameras = () => {
  const get = useGetCameras()
  const reset = useResetCameras()

  useEffect(() => {
    get()
    reset()
  }, [get, reset])
}
