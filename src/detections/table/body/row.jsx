import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableRow } from '@material-ui/core'

import { useNavigation } from 'detections/table/hooks/use-navigation'
import { useRowsStyle } from 'detections/table/hooks/use-rows-style'
import { useCellProps } from 'detections/table/body/hooks/use-cell-props'
import { useDateFormat } from 'detections/table/body/hooks/use-date-format'

export const Row = ({ item }) => <TableRow onClick={useNavigation(`/detection/${item.id}`)} classes={useRowsStyle()}>
  <TableCell {...useCellProps({ hideOnMobile: true })}>{item.id}</TableCell>
  <TableCell {...useCellProps({ hideOnMobile: false })}>{item.class}</TableCell>
  <TableCell {...useCellProps({ hideOnMobile: true })}>{item.score}</TableCell>
  <TableCell {...useCellProps({ hideOnMobile: false })}>{useDateFormat(item.timestamp)}</TableCell>
  <TableCell {...useCellProps({ hideOnMobile: true })}>{item.camera.id}</TableCell>
</TableRow>

Row.propTypes = { item: PropTypes.object.isRequired }

