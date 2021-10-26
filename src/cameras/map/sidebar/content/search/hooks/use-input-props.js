import { useSearchbarStyle } from 'cameras/map/sidebar/content/search/hooks/use-searchbar-style'
import { useSearchProps } from 'cameras/map/sidebar/content/search/hooks/use-search-props'

export const useInputProps = () => ({
  ...useSearchProps(),
  placeholder: 'Cameras by id',
  classes: useSearchbarStyle(),
})

