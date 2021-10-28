import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useDefaultContext, Context } from 'detections/context'
import { useProps } from 'detections/use-props'

export const Wrapper = ({ children }) => <Grid {...useProps()}>
  <Context.Provider value={useDefaultContext()}>
    {children}
  </Context.Provider>
</Grid>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
