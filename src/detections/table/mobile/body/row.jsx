import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@material-ui/core'

import { useNavigation } from 'detections/table/hooks/use-navigation'
import { useRowsStyle } from 'detections/table/hooks/use-rows-style'

export const Row = ({ item }) => <TableRow onClick={useNavigation(`/detection/${item.id}`)} classes={useRowsStyle()}>
  <TableCell align={'center'}>{item.class}</TableCell>
  <TableCell align={'center'}>{item.score}</TableCell>
</TableRow>

Row.propTypes = { item: PropTypes.object.isRequired }
