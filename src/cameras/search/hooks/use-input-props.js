import { useSearchbarStyle } from 'cameras/search/hooks/use-searchbar-style'
import { useContext } from 'cameras/context'

export const useInputProps = () => {
  const { setSearchInput } = useContext()

  return ({
    onChange: setSearchInput,
    placeholder: 'Cameras by id',
    classes: useSearchbarStyle(),
  })
}
