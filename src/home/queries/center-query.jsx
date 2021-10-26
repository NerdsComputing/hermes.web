import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'home/queries/hooks/use-style'

export const CenterQuery = ({ children }) => <Grid container xl={6} lg={6} md={6} sm={12} className={useStyles().align}>
  { children }
</Grid>

CenterQuery.propTypes = { children: PropTypes.object.isRequired }
