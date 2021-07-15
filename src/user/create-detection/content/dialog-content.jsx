import React from 'react'
import { DialogContent as MaterialDialogContent } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'user/create-detection/content/style'

export const DialogContent = ({ children }) => <MaterialDialogContent classes={useStyles()}>
  {children}
</MaterialDialogContent>

DialogContent.propTypes = { children: PropTypes.element.isRequired }
