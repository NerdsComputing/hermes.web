import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import PropTypes from 'prop-types'

import { useStyles } from 'home/carousel/styles/arrow'

export const Arrow = ({ direction, clickFunction }) => {
  const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />
  const classes = useStyles()

  return <div className={classes.arrow} onClick={clickFunction}>{icon}</div>
}

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  clickFunction: PropTypes.object.isRequired,
}

