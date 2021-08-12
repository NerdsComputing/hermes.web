import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detections/filters/accordion-details/filter-wrapper-style'

export const FilterWrapper = ({ children }) => <Grid container classes={useStyles()} alignItems={'center'}>
  {children}
</Grid>

FilterWrapper.propTypes = { children: PropTypes.element.isRequired }
