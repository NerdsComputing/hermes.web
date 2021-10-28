import { useContext } from 'detections/context'

export const useProps = () => {
  const { setDetectionModal } = useContext()

  return ({
    color: 'secondary',
    variant: 'contained',
    onClick: () => setDetectionModal(previous => ({ ...previous, isOpen: false })),
  })
}
