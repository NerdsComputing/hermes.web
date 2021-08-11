import React from 'react'
import PropTypes from 'prop-types'
import { TableRow, useMediaQuery, useTheme } from '@material-ui/core'

import { useNavigation } from 'detections/table/hooks/use-navigation'
import { useRowsStyle } from 'detections/table/hooks/use-rows-style'
import { Mobile } from 'detections/table/body/mobile'
import { Desktop } from 'detections/table/body/desktop'

export const Row = ({ item }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return <TableRow onClick={useNavigation(`/detection/${item.id}`)} classes={useRowsStyle()}>
    {matches ? <Desktop item={item} /> : <Mobile item={item} />}
  </TableRow>
}

Row.propTypes = { item: PropTypes.object.isRequired }
