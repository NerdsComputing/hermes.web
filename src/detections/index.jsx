import React from 'react'
import { useGetDetections } from 'detections/hooks/use-get-detections'

export const Detections = () => {
  useGetDetections()

  return <div>Put components here</div>
}
