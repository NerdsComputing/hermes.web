import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

export const InputWrapper = ({ children }) => <Grid item xs={11} sm={8} md={9} lg={9} xl={9}>
  {children}
</Grid>

InputWrapper.propTypes = { children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired }
