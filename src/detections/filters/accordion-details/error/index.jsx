import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Error = ({ errorMessage }) => <Typography variant={'subtitle1'} style={{ color: 'red' }}>
  {errorMessage}
</Typography>

Error.propTypes = { errorMessage: PropTypes.string.isRequired }
