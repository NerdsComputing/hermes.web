import React from 'react'
import PropTypes from 'prop-types'

import { Score } from 'detection/card/items/score'
import { Timestamp } from 'detection/card/items/timestamp'
import { Class } from 'detection/card/items/class'
import { CardContent } from 'detection/card/card-content'

export const Content = ({ item }) => <CardContent>
  <Score item={item} />
  <Class item={item} />
  <Timestamp item={item} />
</CardContent>

Content.propTypes = { item: PropTypes.object.isRequired }
