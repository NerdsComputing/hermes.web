import React from 'react'
import { DateTimePicker } from '@material-ui/pickers'
import PropTypes from 'prop-types'

import { useProps } from 'detections/filters/accordion-details/timestamp/use-props'

export const Date = ({ label }) => <DateTimePicker {...useProps(label)} />

Date.propTypes = { label: PropTypes.string.isRequired }
