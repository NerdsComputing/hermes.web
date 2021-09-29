import { useLocation } from 'react-router-dom'

export const useIndex = () => {
  const link = useLocation()
  const splits = link.search.split(/[?,&,=]/)

  return splits.indexOf('cameraId')
}
