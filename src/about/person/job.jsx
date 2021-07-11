import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Job = ({ person }) => <Typography>{person.job}</Typography>

Job.propTypes = { person: PropTypes.object.isRequired }
