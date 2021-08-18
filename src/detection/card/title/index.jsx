import React from 'react'
import { CardHeader } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/title/style'

export const Title = ({ id }) => <CardHeader title={`Detection ${id}`} classes={useStyles()} />

Title.propTypes = { id: PropTypes.string.isRequired }
