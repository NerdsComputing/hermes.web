import { useContext } from 'detections/context'

export const useIsChecked = item => {
  const { cameraIds } = useContext().values

  return cameraIds.includes(item)
}
