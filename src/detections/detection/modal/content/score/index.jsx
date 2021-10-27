import React from 'react'
import PropTypes from 'prop-types'

import { ContentWrapper } from 'detections/detection/modal/content/content-wrapper'
import { Icon } from 'detections/detection/modal/content/score/icon'
import { Text } from 'detections/detection/modal/content/items/text'

export const Score = ({ score }) => <ContentWrapper>
  <Icon />
  <Text title={'Score: '} text={score} />
</ContentWrapper>

Score.propTypes = { score: PropTypes.string.isRequired }
