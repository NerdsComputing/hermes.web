import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

import { useStyles } from 'home/arrows/style'
import { useOnArrowClick } from 'home/arrows/hooks/use-on-arrow-click'

export const Arrow = ({ direction }) => {
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />
  const classes = useStyles()
  const onClick = useOnArrowClick()

  return <div className={classes.arrow} onClick={() => onClick(direction)}>{icon}</div>
}

Arrow.propTypes = { direction: PropTypes.string.isRequired }
