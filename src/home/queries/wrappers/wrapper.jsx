import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'home/queries/wrappers/hooks/use-style'

export const Wrapper = ({ children }) => <Typography color={'primary'} classes={useStyles()}>
  { children }
</Typography>

Wrapper.propTypes = { children: PropTypes.object.isRequired }
