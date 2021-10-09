import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const onPage = { backgroundColor: '#1A856B', height: 1, marginLeft: 4, width: '100%' }

const outsidePage = { display: 'none' }

export const Line = ({ path }) => {
  const location = useLocation()

  return <hr style={path === location.pathname ? onPage : outsidePage} />
}

Line.propTypes = { path: PropTypes.string.isRequired }

