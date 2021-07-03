import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/style'
import { Name } from 'about/person/name'
import { useDescription } from 'about/person/use-description'
import { ItemResponsive } from 'about/components/item-responsive'

export const Description = ({ person }) => <ItemResponsive>
  <Name person={person} />
  <Typography>{person.job}</Typography>
  <Typography className={useStyles().text}>{useDescription(person)}</Typography>
  <Box pb={2} />

</ItemResponsive>

Description.propTypes = { person: PropTypes.object.isRequired }
