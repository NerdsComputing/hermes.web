import { useSelector } from 'react-redux'
import { get } from 'lodash'

export const useItems = () => useSelector(({ cameras }) => get(cameras, 'get.data.items', []))
