import React from 'react'
import { MenuItem, Select } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useProps } from 'detections/chart/hooks/use-props'

export const Mode = props => <Select {...useProps(props)}>
  <MenuItem value={'hours'}>By hours</MenuItem>
  <MenuItem value={'days'}>By days</MenuItem>
  <MenuItem value={'months'}>By months</MenuItem>
</Select>

Mode.propTypes = {
  mode: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
}
