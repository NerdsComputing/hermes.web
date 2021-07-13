import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Id } from 'user/row/items/id'
import { Class } from 'user/row/items/class'
import { Score } from 'user/row/items/score'
import { Timestamp } from 'user/row/items/timestamp'

export const Row = ({ id }) => <Grid container spacing={2}>
  <Id id={id} />
  <Class />
  <Score />
  <Timestamp />
</Grid>

Row.propTypes = { id: PropTypes.number.isRequired }

