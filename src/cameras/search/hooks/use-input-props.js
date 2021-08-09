import { useSearchbarStyle } from 'cameras/search/hooks/use-searchbar-style'
import { useContext } from 'cameras/context'
import { useRequestSearch } from 'cameras/search/hooks/use-request-search'
import { useCancelSearch } from 'cameras/search/hooks/use-cancel-search'

const useCallbacks = () => {
  const onChange = useRequestSearch()
  const onCancelSearch = useCancelSearch()

  return ({
    onChange,
    onCancelSearch,
  })
}

export const useInputProps = () => (
  {
    value: useContext().searchPhrase,
    placeholder: 'Cameras by id',
    ...useCallbacks(),
    classes: useSearchbarStyle(),
  })
