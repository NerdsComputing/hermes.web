import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'navbar/style'

export const AppBarWrapper = ({ children }) => <Grid container className={useStyles().root}
                                                     alignContent={'center'}>
  {children}
</Grid>

AppBarWrapper.propTypes = { children: PropTypes.element.isRequired }
