import React from 'react'
import { List } from '@material-ui/core'
import PropTypes from 'prop-types'

export const ListWrapper = ({ children }) => <List dense>
  {children}
</List>

ListWrapper.propTypes = { children: PropTypes.arrayOf(PropTypes.node).isRequired }
