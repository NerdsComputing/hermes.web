import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { usePaperStyles } from 'user/row/hooks/use-paper-styles'

export const Id = ({ id }) => <Grid item xs={3} classes={usePaperStyles()}>{id}</Grid>

Id.propTypes = { id: PropTypes.number.isRequired }
