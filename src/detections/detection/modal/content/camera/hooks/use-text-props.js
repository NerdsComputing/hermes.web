import { useNavigation } from 'detections/table/hooks/use-navigation'

export const useTextProps = cameraId => ({
  color: 'primary',
  variant: 'h6',
  onClick: useNavigation(`/cameras?id=${cameraId}`),
})
