import React from 'react'
import { Grid } from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'

import { SearchButton } from 'cameras/search/search-button'
import { useInputProps } from 'cameras/search/hooks/use-input-props'
import { useOnCancelSearch } from 'cameras/search/hooks/use-on-cancel-search'

export const SearchInput = () => <Grid item xs={12} sm={12} md={12} lg={12}>
  <SearchBar {...useInputProps()} onCancelSearch={useOnCancelSearch()} />
  <Grid container alignItems={'center'} justify={'center'}>
    <SearchButton>Search Cameras</SearchButton>
  </Grid>
</Grid>

