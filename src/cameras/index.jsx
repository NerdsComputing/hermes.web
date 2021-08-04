import React from 'react'

import { useGetCameras } from 'cameras/hooks/use-get-cameras'

export const Cameras = () => {
  useGetCameras()

  return <>Cameras</>
}
