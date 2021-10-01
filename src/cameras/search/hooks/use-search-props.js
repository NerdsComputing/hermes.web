import { useContext } from 'cameras/context'

export const useSearchProps = () => {
  const { setSearchInput, searchInput } = useContext()

  return {
    value: searchInput,
    onChange: setSearchInput,
  }
}
