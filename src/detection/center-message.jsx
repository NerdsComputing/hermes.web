import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import { useMessageProps } from 'detection/hooks/use-message-props'

export const CenterMessage = ({ children }) => <Grid {...useMessageProps()}>
  {children}
</Grid>

CenterMessage.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
