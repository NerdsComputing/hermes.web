import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useWrapperStyle } from 'home/character-section/characters/character/hooks/use-wrapper-style'

export const Wrapper = ({ children }) => <Grid item classes={useWrapperStyle()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }

