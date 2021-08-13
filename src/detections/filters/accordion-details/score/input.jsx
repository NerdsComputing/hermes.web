import React from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useProps } from 'detections/filters/accordion-details/score/use-props'

export const Input = ({ label }) => <TextField {...useProps(label)} />

Input.propTypes = { label: PropTypes.string.isRequired }
