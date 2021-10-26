import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'cameras/map/marker/info/id/wrapper'
import { Icon } from 'cameras/map/marker/info/id/icon'
import { Text } from 'cameras/map/marker/info/text'

export const Id = ({ value }) => <Wrapper>
  <Icon />
  <Text title={'Id'} value={value} />
</Wrapper>

Id.propTypes = { value: PropTypes.string.isRequired }
