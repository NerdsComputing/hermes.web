import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { Id } from 'user/row/items/id'
import { Class } from 'user/row/items/class'
import { Score } from 'user/row/items/score'
import { Timestamp } from 'user/row/items/timestamp'
import { useGridStyle } from 'user/row/hooks/use-grid-style'

export const Content = ({ item }) => <Grid classes={useGridStyle()} container>
  <Id id={item.id} />
  <Class theClass={item.class} />
  <Score score={item.score} />
  <Timestamp timestamp={item.timeStamp} />
</Grid>

Content.propTypes = { item: PropTypes.object.isRequired }
