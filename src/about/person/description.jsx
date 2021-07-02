import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/style'
import { Name } from 'about/person/name'
import { useDescription } from 'about/person/use-description'

export const Description = ({ person }) => <Grid item xs={6} sm={6} md={6}>
  <Name person={person} />
  <Typography>{person.job}</Typography>
  <Typography className={useStyles().text}>{useDescription(person)}</Typography>
  <Box pb={2} />

</Grid>

Description.propTypes = { person: PropTypes.object.isRequired }
