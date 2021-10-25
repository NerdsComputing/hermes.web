import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/style'

export const Wrapper = ({ children }) => <Grid container className={useStyles().grid}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }

