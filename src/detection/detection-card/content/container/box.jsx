import React from 'react'
import { Box as MaterialBox } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/detection-card/content/container/box-style'

export const Box = ({ children }) => <MaterialBox className={useStyles().root}>
  {children}
</MaterialBox>

Box.propTypes = { children: PropTypes.element.isRequired }
