import React from 'react'
import { Box, CardContent, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/detection-card/content/style'

export const Container = ({ children }) => <CardContent className={useStyles().contentRoot}>
  <Grid container direction={'column'} justify={'center'} alignContent={'center'}
        className={useStyles().contentGrid}>
    <Box className={useStyles().contentBox}>
      {children}
    </Box>
  </Grid>
</CardContent>

Container.propTypes = { children: PropTypes.array.isRequired }
