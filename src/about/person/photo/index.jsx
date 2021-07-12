import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/person/photo/style'
import { HalfRowItem } from 'about/components/item-responsive'

export const Photo = ({ person }) => <HalfRowItem>
  <Box display={'flex'} justifyContent={'center'}>
    <img src={person.picture} className={useStyles().root} />
  </Box>
</HalfRowItem>

Photo.propTypes = { person: PropTypes.object.isRequired }
