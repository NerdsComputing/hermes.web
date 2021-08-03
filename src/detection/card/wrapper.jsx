import React from 'react'
import { Card } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/style'

export const Wrapper = ({ children }) => <Card classes={useStyles()}>
  {children}
</Card>

Wrapper.propTypes = { children: PropTypes.array.isRequired }
