import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { WatchLater } from '@material-ui/icons'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/items/style'
import { DateFormat } from 'detection/card/items/date-format'

export const Timestamp = ({ item }) => <Box classes={useStyles()}>
  <WatchLater />
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    {DateFormat(item.timestamp)}
  </Typography>
</Box>

Timestamp.propTypes = { item: PropTypes.object.isRequired }

