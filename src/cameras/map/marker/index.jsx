import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/style'
import { Info } from 'cameras/map/marker/info'
import { Item } from 'cameras/map/marker/item-props'

export const Marker = ({ item }) => <>
  <div className={useStyles().markerPosition}>
    <LocationOnIcon fontSize={'large'} />
  </div>
  {item.show && <Info item={item} />}
</>

Marker.propTypes = { item: PropTypes.objectOf(Item).isRequired }
