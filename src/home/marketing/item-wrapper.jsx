import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useItemStyle } from 'home/marketing/styles/item-style'

export const ItemWrapper = ({ children }) => <Grid item classes={useItemStyle()}>
  {children}
</Grid>

ItemWrapper.propTypes = { children: PropTypes.node.isRequired }
