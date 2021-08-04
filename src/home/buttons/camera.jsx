import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'

function cameras() {
  window.location.href = '/cameras'
}

export const Camera = ({ children }) => <Grid item>
  <Button variant={'contained'} color={'primary'} onClick={cameras}>
    {children}
  </Button>
</Grid>

Camera.propTypes = { children: PropTypes.array.isRequired }
