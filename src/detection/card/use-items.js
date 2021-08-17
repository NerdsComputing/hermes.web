import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useItems = () => useSelector(({ detection }) => get(detection, 'get.data', []))
