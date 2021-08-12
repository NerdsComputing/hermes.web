import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const InputWrapper = ({ children }) => <Grid container item xs={11} sm={7} md={8} alignItems={'center'}>
  {children}
</Grid>

InputWrapper.propTypes = { children: PropTypes.element.isRequired }
