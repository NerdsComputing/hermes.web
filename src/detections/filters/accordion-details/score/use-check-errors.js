import { useContext } from 'detections/context'

export const useCheckErrors = name => {
  const smth = useContext().errors.score

  return {
    error: smth && smth[name],
    helperText: smth && smth[name],
  }
}
