import React from 'react'
import PropTypes from 'prop-types'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import { useStyles } from 'cameras/map/style'
import { Info } from 'cameras/map/marker/info'

export const Marker = ({ item }) => <>
  <div className={useStyles().markerPosition}>
    <LocationOnIcon fontSize={'large'} />
  </div>
  {item.show && <Info item={item} />}
</>

Marker.propTypes = { item: PropTypes.object.isRequired }
