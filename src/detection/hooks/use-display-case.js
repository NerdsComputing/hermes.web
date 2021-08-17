import { useSelector } from 'react-redux'

export const useDisplayCase = () => {
  const { data, errors } = useSelector(({ detection }) => detection.get)

  return {
    [!!data]: 'success',
    [!!errors]: 'failure',
  }
}
