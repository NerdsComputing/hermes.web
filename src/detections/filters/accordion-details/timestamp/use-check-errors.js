import { useContext } from 'detections/context'

export const useCheckErrors = name => {
  const errors = useContext().errors.timestamp

  return {
    error: errors && errors[name],
    helperText: errors && errors[name],
  }
}
