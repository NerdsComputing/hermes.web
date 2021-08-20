import { useContext } from 'detections/context'

export const useCheckErrors = () => ({
  error: useContext().errors.class,
  helperText: useContext().errors.class,
})
