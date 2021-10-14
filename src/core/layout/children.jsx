import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({ root: { [theme.breakpoints.down('sm')]: { paddingTop: theme.spacing(12) } } }))

export const Children = ({ children }) => <Box classes={useStyles()}>
  {children}
</Box>

Children.propTypes = { children: PropTypes.element.isRequired }
