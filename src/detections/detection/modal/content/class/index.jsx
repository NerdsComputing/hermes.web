import React from 'react'
import PropTypes from 'prop-types'

import { ContentWrapper } from 'detections/detection/modal/content/content-wrapper'
import { Text } from 'detections/detection/modal/content/items/text'
import { Icon } from 'detections/detection/modal/content/class/icon'

export const Class = ({ text }) => <ContentWrapper>
  <Icon />
  <Text title={'Class: '} text={text} />
</ContentWrapper>

Class.propTypes = { text: PropTypes.string.isRequired }
