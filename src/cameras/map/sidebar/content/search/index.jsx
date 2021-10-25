import React from 'react'
import { Grid } from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'

import { useInputProps } from 'cameras/map/sidebar/content/search/hooks/use-input-props'
import { useOnCancelSearch } from 'cameras/map/sidebar/content/search/hooks/use-on-cancel-search'
import { SearchButton } from 'cameras/map/sidebar/content/search/search-button'

export const Search = () => <Grid item xs={12} sm={12} md={12} lg={12}>
  <SearchBar {...useInputProps()} onCancelSearch={useOnCancelSearch()} />
  <Grid container alignItems={'center'} justify={'center'}>
    <SearchButton>Search Cameras</SearchButton>
  </Grid>
</Grid>
