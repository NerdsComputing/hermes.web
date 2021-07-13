import React from 'react'
import { Grid as MaterialGrid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/detection-card/content/container/grid-style'

export const Grid = ({ children }) => <MaterialGrid container direction={'column'} justify={'center'}
                                                    alignContent={'center'} className={useStyles().root}>
  {children}
</MaterialGrid>

Grid.propTypes = { children: PropTypes.element.isRequired }
