import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'detections/detection/modal/content/wrapper'
import { Score } from 'detections/detection/modal/content/score'
import { Class } from 'detections/detection/modal/content/class'
import { DateTime } from 'detections/detection/modal/content/datetime'
import { Camera } from 'detections/detection/modal/content/camera'

export const Content = ({ detection }) => <Wrapper>
  <Score score={detection.score} />
  <Class text={detection.class} />
  <DateTime date={detection.datetime} />
  <Camera cameraId={detection.camera} />
</Wrapper>

Content.propTypes = { detection: PropTypes.object.isRequired }
