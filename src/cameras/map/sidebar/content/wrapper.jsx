import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/sidebar/content/styles/styles'

export const Wrapper = ({ children }) => <Box classes={useStyles()}>
  {children}
</Box>

Wrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
