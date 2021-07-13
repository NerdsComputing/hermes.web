import React from 'react'
import { Card as MaterialCard } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyle } from 'detection/detection-card/use-style'

export const Card = ({ children }) => <MaterialCard className={useStyle()}>
  {children}
</MaterialCard>

Card.propTypes = { children: PropTypes.array.isRequired }
