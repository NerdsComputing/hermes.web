import React from 'react'
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import PropTypes from 'prop-types'

import { useProps } from 'detections/filters/accordion-details/timestamp/use-props'

export const Date = ({ label, name }) => <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <DateTimePicker {...useProps(label, name)} />
</MuiPickersUtilsProvider>

Date.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
