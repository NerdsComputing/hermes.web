import React from 'react'
import { CardHeader } from '@material-ui/core'

import { useStyles } from 'detection/card/title/style'
import PropTypes from 'prop-types'

export const Title = ({ id }) => <CardHeader title={`Detection ${id}`} classes={useStyles()} />

Title.propTypes = { id: PropTypes.string.isRequired }
