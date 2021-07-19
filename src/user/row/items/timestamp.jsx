import React from 'react'
import { Grid } from '@material-ui/core'

import { usePaperStyles } from 'user/row/hooks/use-paper-styles'
import PropTypes from 'prop-types'

export const Timestamp = ({ timestamp }) => <Grid item xs={3} classes={usePaperStyles()}>{timestamp}</Grid>

Timestamp.propTypes = { timestamp: PropTypes.instanceOf(Date).isRequired }
