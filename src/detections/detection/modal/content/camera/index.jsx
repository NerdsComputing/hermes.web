import React from 'react'
import PropTypes from 'prop-types'

import { ContentWrapper } from 'detections/detection/modal/content/content-wrapper'
import { Icon } from 'detections/detection/modal/content/camera/icon'
import { Text } from 'detections/detection/modal/content/camera/text'

export const Camera = ({ cameraId }) => <ContentWrapper>
  <Icon />
  <Text text={cameraId} title={'Camera: '} />
</ContentWrapper>

Camera.propTypes = { cameraId: PropTypes.string.isRequired }
