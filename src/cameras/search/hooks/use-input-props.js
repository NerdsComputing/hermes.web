import { useSearchbarStyle } from 'cameras/search/hooks/use-searchbar-style'

export const useInputProps = setSearchInput => ({
  onChange: value => {
    setSearchInput(value)
  },
  placeholder: 'Cameras by id',
  classes: useSearchbarStyle(),
})
