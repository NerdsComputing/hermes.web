import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useItem = () => useSelector(({ detection }) => get(detection, 'get.data', {}))
