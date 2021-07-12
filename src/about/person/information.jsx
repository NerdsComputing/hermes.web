import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Name } from 'about/person/name'
import { HalfRowItem } from 'about/components/item-responsive'
import { Job } from 'about/person/job'
import { Description } from 'about/person/description'

export const Information = ({ person }) => <HalfRowItem>
  <Name person={person} />
  <Job person={person} />
  <Description person={person} />
  <Box pb={2} />
</HalfRowItem>

Information.propTypes = { person: PropTypes.object.isRequired }
