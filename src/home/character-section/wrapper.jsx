import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useGridStyle } from 'home/character-section/hooks/use-grid-style'

export const Wrapper = ({ children }) => <Grid item justify={'left'} classes={useGridStyle()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
