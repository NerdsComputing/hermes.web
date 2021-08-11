import React from 'react'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/style'

export const Marker = ({ text }) => <div className={useStyles().markerPosition}>{text}</div>

Marker.propTypes = { text: PropTypes.element.isRequired }
