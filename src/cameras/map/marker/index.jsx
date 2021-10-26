import React from 'react'
import PropTypes from 'prop-types'

import { useStyles } from 'cameras/map/style'
import { Info } from 'cameras/map/marker/info'
import { Item } from 'cameras/map/marker/item-props'
import { Icon } from 'cameras/map/marker/icon'

export const Marker = ({ item }) => <>
  <div className={useStyles().markerPosition}>
    <Icon />
  </div>
  {item.show && <Info item={item} />}
</>

Marker.propTypes = { item: PropTypes.objectOf(Item).isRequired }
