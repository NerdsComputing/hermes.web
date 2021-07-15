import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => <Grid container direction={'column'}
                                               alignContent={'center'} justify={'center'}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
