import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useProps } from 'detections/filters/accordion-details/filter/use-props'

export const Wrapper = ({ children }) => <Grid {...useProps()}>
  {children}
</Grid>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
