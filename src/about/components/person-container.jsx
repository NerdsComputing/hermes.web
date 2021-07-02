import { Grid } from '@material-ui/core'
import { useStyles } from 'about/style'
import React from 'react'
import PropTypes from 'prop-types'

export const PersonContainer = ({ children }) => <Grid container className={useStyles().root}>
  {children}
</Grid>

PersonContainer.propTypes = { children: PropTypes.node.isRequired }
