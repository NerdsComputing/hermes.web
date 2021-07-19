import React from 'react'
import { Grid } from '@material-ui/core'

import { usePaperStyles } from 'user/row/hooks/use-paper-styles'
import PropTypes from 'prop-types'

export const Score = ({ score }) => <Grid item xs={3} classes={usePaperStyles()}>{score}</Grid>

Score.propTypes = { score: PropTypes.number.isRequired }
