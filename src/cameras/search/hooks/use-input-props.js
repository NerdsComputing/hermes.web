import { useSearchbarStyle } from 'cameras/search/hooks/use-searchbar-style'
import { useSearchProps } from 'cameras/search/hooks/use-search-props'

export const useInputProps = () => ({
  ...useSearchProps(),
  placeholder: 'Cameras by id',
  classes: useSearchbarStyle(),
})

