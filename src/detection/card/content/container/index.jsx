import React from 'react'
import { CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Grid } from 'detection/card/content/container/grid'
import { Box } from 'detection/card/content/container/box'
import { useStyles } from 'detection/card/content/container/style'

export const Container = ({ children }) => <CardContent classes={useStyles()}>
  <Grid>
    <Box>
      {children}
    </Box>
  </Grid>
</CardContent>

Container.propTypes = { children: PropTypes.array.isRequired }
