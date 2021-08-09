import React from 'react'
import SearchBar from 'material-ui-search-bar'

import { useContext } from 'cameras/context'
import { useRequestSearch } from 'cameras/search/hooks/use-request-search'
import { useCancelSearch } from 'cameras/search/hooks/use-cancel-search'
import { useSearchbarStyle } from 'cameras/search/hooks/use-searchbar-style'

export const SearchInput = () => {
  const { searchPhrase } = useContext()
  const onChange = useRequestSearch()
  const onCancelSearch = useCancelSearch()

  return <SearchBar value={searchPhrase} placeholder={'Cameras by id'}
                    onChange={onChange} classes={useSearchbarStyle()}
                    onCancelSearch={onCancelSearch} />
}

