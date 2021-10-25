import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { useSearchInput } from 'cameras/map/sidebar/content/search/hooks/use-search-input'

export const SearchButton = ({ children }) => <Grid item>
  <Box px={5} py={1} justifyContent={'center'}>
    <Button variant={'contained'} color={'secondary'} onClick={useSearchInput()} startIcon={<SearchIcon />}>
      {children}
    </Button>
  </Box>
</Grid>

SearchButton.propTypes = { children: PropTypes.string.isRequired }
