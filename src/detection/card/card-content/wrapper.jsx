import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/card-content/wrapper-style'

export const Wrapper = ({ children }) => <Box classes={useStyles()}>
  {children}
</Box>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
