import React from 'react'
import { Box, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/items/style'

export const Score = ({ item }) => <Box classes={useStyles()}>
  <CheckIcon />
  <Typography variant={'h6'} className={useStyles().contentText}>
    {`Score: ${item.score * 100}`}
  </Typography>
</Box>

Score.propTypes = { item: PropTypes.object.isRequired }
