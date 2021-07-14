import React from 'react'
import { Card } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/style'

export const CardWrapper = ({ children }) => <Card className={useStyles()}>
  {children}
</Card>

CardWrapper.propTypes = { children: PropTypes.array.isRequired }
