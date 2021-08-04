import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'

import { useNavigation } from 'home/live/hooks/use-navigation'

export const NavigationButton = ({ children, path }) => <Grid item>
  <Button variant={'contained'} color={'primary'} onClick={useNavigation(path)}>
    {children}
  </Button>
</Grid>

NavigationButton.propTypes = {
  children: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
}
