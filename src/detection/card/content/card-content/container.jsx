import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/content/card-content/container-style'

export const Container = ({ children }) => <Grid container direction={'column'} justify={'center'}
                                                 alignContent={'center'} classes={useStyles()}>
  {children}
</Grid>

Container.propTypes = { children: PropTypes.element.isRequired }
