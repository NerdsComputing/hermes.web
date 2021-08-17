import React from 'react'
import { Grid } from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'

import { SearchButton } from 'cameras/search/search-button'
import { useInputProps } from 'cameras/search/hooks/use-input-props'
import { useContext } from 'cameras/context'

export const SearchInput = () => <Grid item xs={12} sm={12} md={12} lg={12}>
  <SearchBar {...useInputProps(useContext().setSearchInput)} />
  <Grid container alignItems={'center'} justify={'center'}>
    <SearchButton value={useContext().searchInput}>Search Cameras</SearchButton>
  </Grid>
</Grid>

