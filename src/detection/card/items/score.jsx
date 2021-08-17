import React from 'react'
import { Box, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { useStyles } from 'detection/card/items/style'
import PropTypes from 'prop-types'

export const Score = ({ item }) => <Box classes={useStyles()}>
  <CheckIcon />
  <Typography variant={'h6'} className={useStyles().contentText}>
    {`Score: ${item.score * 100}`}
  </Typography>
</Box>

Score.propTypes = { item: PropTypes.object.isRequired }
