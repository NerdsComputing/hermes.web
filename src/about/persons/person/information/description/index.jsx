import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

import { ItemWrapper } from 'about/persons/person/information/item-wrapper'
import { useStyles } from 'about/persons/person/information/description/style'

export const Description = ({ description }) => <ItemWrapper>
  <Typography classes={useStyles()}>
    {description}
  </Typography>
</ItemWrapper>

Description.propTypes = { description: PropTypes.string.isRequired }
