import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import { useMessageProps } from 'detections/chart/hooks/use-message-props'

export const CenterMessage = ({ children }) => <Grid container {...useMessageProps()}>
  {children}
</Grid>

CenterMessage.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
