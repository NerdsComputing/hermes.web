import React from 'react'
import { Box, Grid } from '@material-ui/core'

import PropTypes from 'prop-types'
import { useStyles } from 'about/style'

export const Photo = ({ person }) => <Grid item md={6} sm={6} xs={6}>
  <Box display={'flex'} justifyContent={'center'}>
    <img src={person.picture} className={useStyles().img} />
  </Box>
</Grid>

Photo.propTypes = { person: PropTypes.object.isRequired }
