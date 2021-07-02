import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'navbar/style'

export const UserContentWrapper = ({ children }) => <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
  <Grid container direction={'row'} alignItems={'center'} justify={'flex-end'} className={useStyles().userContent}>
    {children}
  </Grid>
</Grid>

UserContentWrapper.propTypes = { children: PropTypes.element.isRequired }
