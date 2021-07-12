import React from 'react'
import { Card as MaterialCard } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/detection-card/style'

export const Card = ({ children }) => <MaterialCard className={useStyles().root}>
  {children}
</MaterialCard>

Card.propTypes = { children: PropTypes.array.isRequired }
