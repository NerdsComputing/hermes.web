import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { useMessageProps } from 'detections/table/hooks/use-message-props'

export const CenterMessage = ({ children }) => <Grid {...useMessageProps()}>
  {children}
</Grid>

CenterMessage.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
