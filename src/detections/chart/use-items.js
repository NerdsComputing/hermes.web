import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useItems = () => useSelector(({ detections }) => get(detections, 'get.data.items', []))
