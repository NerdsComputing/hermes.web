import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useTotalCounts = () => useSelector(({ detections }) => get(detections, 'get.data.totalCount', []))
