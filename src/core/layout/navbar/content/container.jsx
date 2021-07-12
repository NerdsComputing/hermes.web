import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'core/layout/navbar/content/style'

export const Container = ({ children }) => <Grid item xs={5} sm={5} md={5} lg={5} xl={5}
                                                 className={useStyles().marginRight}>
  <Grid container alignItems={'center'} justify={'flex-end'}>
    {children}
  </Grid>
</Grid>

Container.propTypes = { children: PropTypes.element.isRequired }
