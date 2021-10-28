import React from 'react'
import PropTypes from 'prop-types'

import { ContentWrapper } from 'detections/detection/modal/content/content-wrapper'
import { Icon } from 'detections/detection/modal/content/datetime/icon'
import { Text } from 'detections/detection/modal/content/items/text'

export const DateTime = ({ date }) => <ContentWrapper>
  <Icon />
  <Text title={'Date & Time: '} text={date} />
</ContentWrapper>

DateTime.propTypes = { date: PropTypes.string.isRequired }
