import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'detections/detection/modal/wrapper'
import { Title } from 'detections/detection/modal/title'
import { Content } from 'detections/detection/modal/content'
import { Button } from 'detections/detection/modal/button'

export const Modal = ({ detection }) => <Wrapper>
  <Title title={'Detection 35'} />
  <Content detection={detection} />
  <Button />
</Wrapper>

Modal.propTypes = { detection: PropTypes.object.isRequired }
