import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useItems = () => {
  console.log(useSelector(({ detections }) => get(detections, 'get.data.items', [])))

  return useSelector(({ detections }) => get(detections, 'get.data.items', []))
}
