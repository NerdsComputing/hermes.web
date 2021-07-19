import React from 'react'
import { Grid } from '@material-ui/core'

import { usePaperStyles } from 'user/row/hooks/use-paper-styles'
import PropTypes from 'prop-types'

export const Class = ({ theClass }) => <Grid item xs={3} classes={usePaperStyles()}>{theClass}</Grid>

Class.propTypes = { theClass: PropTypes.string.isRequired }
