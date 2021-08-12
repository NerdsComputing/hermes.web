import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@material-ui/core'

import { useNavigation } from 'detections/table/hooks/use-navigation'
import { useRowsStyle } from 'detections/table/hooks/use-rows-style'
import { useRowProps } from 'detections/table/body/hooks/use-row-props'

export const Row = ({ item }) => <TableRow onClick={useNavigation(`/detection/${item.id}`)} classes={useRowsStyle()}>
  <TableCell {...useRowProps(true)}>{item.id}</TableCell>
  <TableCell {...useRowProps(false)}>{item.class}</TableCell>
  <TableCell {...useRowProps(true)}>{item.score}</TableCell>
  <TableCell {...useRowProps(false)}>{item.timeStamp}</TableCell>
  <TableCell {...useRowProps(true)}>cameraid</TableCell>
</TableRow>

Row.propTypes = { item: PropTypes.object.isRequired }
