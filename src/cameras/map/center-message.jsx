import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useMessageProps } from 'cameras/map/sidebar/content/list/hooks/use-message-props'

export const CenterMessage = ({ children }) => <Grid {...useMessageProps()}>
  {children}
</Grid>

CenterMessage.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
