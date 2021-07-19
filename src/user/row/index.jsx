import React from 'react'
import { Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Content } from 'user/row/content'
import { useItemStyles } from 'user/row/hooks/use-item-style'

export const Row = ({ item }) => <Paper classes={useItemStyles()}>
  <Content item={item} />
</Paper>

Row.propTypes = { item: PropTypes.object.isRequired }

