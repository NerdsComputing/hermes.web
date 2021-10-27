import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { ItemWrapper } from 'about/persons/person/information/item-wrapper'
import { useStyles } from 'about/persons/person/information/name/style'

export const Name = ({ name }) => <ItemWrapper>
  <Typography variant={'h5'} classes={useStyles()}>
    {name}
  </Typography>
</ItemWrapper>

Name.propTypes = { name: PropTypes.string.isRequired }
