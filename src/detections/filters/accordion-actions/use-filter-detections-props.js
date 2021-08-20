import { useContext } from 'detections/context'

export const useFilterDetectionsProps = () => ({
  fullWidth: true,
  variant: 'contained',
  color: 'secondary',
  type: 'submit',
  onClick: useContext().handleSubmit,
})
