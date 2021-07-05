import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/style'
import { Name } from 'about/person/name'
import { useDescription } from 'about/person/use-description'
import { HalfRowItem } from 'about/components/item-responsive'

export const Description = ({ person }) => <HalfRowItem>
  <Name person={person} />
  <Typography>{person.job}</Typography>
  <Typography className={useStyles().text}>{useDescription(person)}</Typography>
  <Box pb={2} />
</HalfRowItem>

Description.propTypes = { person: PropTypes.object.isRequired }
