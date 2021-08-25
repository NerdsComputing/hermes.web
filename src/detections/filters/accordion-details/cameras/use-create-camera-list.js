import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useContext } from 'detections/filters/context'

const createList = items => Object.fromEntries(items.map(({ id }) => [id, { checked: false }]))

export const useCreateCameraList = () => {
  const { items } = useSelector(({ cameras }) => cameras.get.data)
  const { setCameraVariants } = useContext()

  return useEffect(() => {
    setCameraVariants(createList(items))
  }, [items, setCameraVariants, createList])
}
