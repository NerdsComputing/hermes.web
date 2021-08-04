import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import { useNavigation } from 'home/buttons/hooks/use-navigation'

export const Detection = ({ children }) => <Grid item>
  <Button variant={'contained'} color={'primary'} onClick={useNavigation('/detections')}>
    {children}
  </Button>
</Grid>

Detection.propTypes = { children: PropTypes.array.isRequired }
