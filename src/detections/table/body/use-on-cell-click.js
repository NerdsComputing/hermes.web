import { useCallback } from 'react'
import { useContext } from 'detections/context'

const formatTimestamp = timestamp => {
  const date = new Date(timestamp)

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${
    date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

const prepareModalData = item => ({
  isOpen: true,
  score: item.score,
  class: item.class,
  datetime: formatTimestamp(item.timestamp),
  camera: item.camera.id,
})

export const useOnCellClick = item => {
  const { setDetectionModal } = useContext()

  return useCallback(() => {
    setDetectionModal(prepareModalData(item))
  }, [item, setDetectionModal])
}
