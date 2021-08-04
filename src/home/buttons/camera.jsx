import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import { useNavigation } from 'home/buttons/hooks/use-navigation'

export const Camera = ({ children }) => <Grid item>
  <Button variant={'contained'} color={'primary'} onClick={useNavigation('/cameras')}>
    {children}
  </Button>
</Grid>

Camera.propTypes = { children: PropTypes.array.isRequired }
