import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import PropTypes from 'prop-types'

import { useRemoveFilter } from 'detections/filters/hooks/use-remove-filter'
import { useStyles } from 'detections/filters/accordion-details/remove-button/style'

export const RemoveButton = ({ index, type }) => <HighlightOffIcon onClick={useRemoveFilter(index, type)}
                                                                   classes={useStyles()} />

RemoveButton.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}
