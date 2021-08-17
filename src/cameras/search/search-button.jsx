import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid } from '@material-ui/core'
import { useSearchInput } from 'cameras/search/hooks/use-search-input'

export const SearchButton = ({ children }) => <Grid item>
  <Box px={5} py={1} justifyContent={'center'}>
    <Button variant={'contained'} color={'primary'} onClick={useSearchInput()}>
      {children}
    </Button>
  </Box>
</Grid>

SearchButton.propTypes = { children: PropTypes.string.isRequired }
