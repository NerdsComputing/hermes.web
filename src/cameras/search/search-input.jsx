import React from 'react'
import SearchBar from 'material-ui-search-bar'

import { useInputProps } from 'cameras/search/hooks/use-input-props'

export const SearchInput = () => <SearchBar {...useInputProps()} />

