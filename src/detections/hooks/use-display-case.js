import { useSelector } from 'react-redux'

export const useDisplayCase = () => {
  const { data, errors } = useSelector(({ detections }) => detections.get)

  return {
    [!!data]: 'success',
    [!!errors]: 'failure',
  }
}
