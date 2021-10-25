import { useSelector } from 'react-redux'

export const useDisplayCase = () => {
  const { data, errors } = useSelector(({ cameras }) => cameras.get)

  return {
    [!!data]: 'success',
    [!!errors]: 'failure',
  }
}
