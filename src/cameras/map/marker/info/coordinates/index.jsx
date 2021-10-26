import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'cameras/map/marker/info/coordinates/wrapper'
import { Icon } from 'cameras/map/marker/info/coordinates/icon'
import { Text } from 'cameras/map/marker/info/text'

export const Coordinates = ({ coordinate, value }) => <Wrapper>
  <Icon />
  <Text title={coordinate} value={value} />
</Wrapper>

Coordinates.propTypes = {
  coordinate: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
