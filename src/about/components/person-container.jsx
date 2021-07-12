import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/style'

export const PersonContainer = ({ children }) => <Grid container className={useStyles().root}>
  {children}
</Grid>

PersonContainer.propTypes = { children: PropTypes.node.isRequired }
