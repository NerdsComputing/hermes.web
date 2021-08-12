import React from 'react'

import { TableCell } from '@material-ui/core'
import { useCellProps } from 'detections/table/header/hooks/use-cell-props'
import PropTypes from 'prop-types'

export const Cell = ({ item }) => <TableCell {...useCellProps(item)}>{item.label}</TableCell>

Cell.propTypes = { item: PropTypes.object.isRequired }
