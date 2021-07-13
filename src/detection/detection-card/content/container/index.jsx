import React from 'react'
import { CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Grid } from 'detection/detection-card/content/container/grid'
import { Box } from 'detection/detection-card/content/container/box'
import { useStyles } from 'detection/detection-card/content/container/style'

export const Container = ({ children }) => <CardContent className={useStyles().root}>
  <Grid>
    <Box>
      {children}
    </Box>
  </Grid>
</CardContent>

Container.propTypes = { children: PropTypes.array.isRequired }
