import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'

import { useNavigation } from 'home/buttons/hooks/use-navigation'

export const NavigationButton = props => <Grid item>
  <Button variant={'contained'} color={'primary'} onClick={useNavigation(props.path)}>
    {props.children}
  </Button>
</Grid>

NavigationButton.propTypes = {
  children: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
}
