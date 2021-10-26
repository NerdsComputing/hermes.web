import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'home/queries/wrappers/hooks/use-style'

export const MarginWrapper = ({ children }) => <Grid item lg={6} sm={12} xs={12} className={useStyles().addMargin}>
  { children }
</Grid>

MarginWrapper.propTypes = { children: PropTypes.object.isRequired }
