import React from 'react'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/style'

export const Marker = ({ item }) => <div className={useStyles().markerPosition}>
  {item.id}
</div>

Marker.propTypes = { item: PropTypes.string.isRequired }
