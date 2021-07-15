import React from 'react'
import { CardContent as MaterialCardContent } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Grid } from 'detection/card/content/wrapper/grid'
import { Box } from 'detection/card/content/wrapper/box'
import { useStyles } from 'detection/card/content/wrapper/style'

export const Wrapper = ({ children }) => <MaterialCardContent classes={useStyles()}>
  <Grid>
    <Box>
      {children}
    </Box>
  </Grid>
</MaterialCardContent>

Wrapper.propTypes = { children: PropTypes.array.isRequired }
