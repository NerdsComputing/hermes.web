import React from 'react'
import { Box as MaterialBox } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/content/wrapper/box-style'

export const Box = ({ children }) => <MaterialBox classes={useStyles()}>
  {children}
</MaterialBox>

Box.propTypes = { children: PropTypes.element.isRequired }
