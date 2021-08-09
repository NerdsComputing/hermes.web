import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid } from '@material-ui/core'

import { useNavigation } from 'home/live/hooks/use-navigation'

export const NavigationButton = ({ children, path }) => <Grid item>
  <Box px={5} py={1}>
    <Button variant={'contained'} color={'primary'} onClick={useNavigation(path)}>
      {children}
    </Button>
  </Box>
</Grid>

NavigationButton.propTypes = {
  children: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
}
