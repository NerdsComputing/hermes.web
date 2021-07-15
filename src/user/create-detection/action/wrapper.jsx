import React from 'react'
import { DialogActions } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'user/create-detection/action/style'

export const Wrapper = ({ children }) => <DialogActions classes={useStyles()}>
  {children}
</DialogActions>

Wrapper.propTypes = { children: PropTypes.element.isRequired }
