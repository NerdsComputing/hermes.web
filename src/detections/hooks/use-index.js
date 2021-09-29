import { useLocation } from 'react-router-dom'

export const useIndex = () => {
  const link = useLocation()
  const keys = link.search.split(/[?,&,=]/)

  return keys.indexOf('cameraId')
}
