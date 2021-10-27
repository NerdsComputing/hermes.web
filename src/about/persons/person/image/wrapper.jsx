import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/persons/person/image/style'

export const Wrapper = ({ children }) => <Box classes={useStyles()}>
  {children}
</Box>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
