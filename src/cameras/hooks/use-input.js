import { useContext } from 'cameras/context'

export const useInput = () => {
  const { searchPhrase } = useContext()

  return {
    pagination: { pageSize: 1000, pageIndex: 0 },
    ...searchPhrase && { cameraIds: [searchPhrase] },
  }
}
