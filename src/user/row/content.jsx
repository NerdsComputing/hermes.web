import React from 'react'

import { Id } from 'user/row/items/id'
import { Class } from 'user/row/items/class'
import { Score } from 'user/row/items/score'
import { Timestamp } from 'user/row/items/timestamp'
import PropTypes from 'prop-types'

export const Content = ({ id }) => <>
  <Id id={id} />
  <Class />
  <Score />
  <Timestamp />
</>

Content.propTypes = { id: PropTypes.number.isRequired }
