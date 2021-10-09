import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useDetections = () => useSelector(({ detections }) => get(detections, 'get.data.items', []))
