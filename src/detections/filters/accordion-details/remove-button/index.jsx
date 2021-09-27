import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import PropTypes from 'prop-types'

import { useStyles } from 'detections/filters/accordion-details/remove-button/style'
import { Wrapper } from 'detections/filters/accordion-details/remove-button/wrapper'
import { useHandleRemove } from 'detections/filters/accordion-details/remove-button/use-handle-remove'

export const RemoveButton = ({ index, type }) => <Wrapper>
  <HighlightOffIcon onClick={useHandleRemove(index, type)} classes={useStyles()} />
</Wrapper>

RemoveButton.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}
