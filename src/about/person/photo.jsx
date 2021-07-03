import React from 'react'
import { Box } from '@material-ui/core'

import PropTypes from 'prop-types'
import { useStyles } from 'about/style'
import { ItemResponsive } from 'about/components/item-responsive'

export const Photo = ({ person }) => <ItemResponsive>
  <Box display={'flex'} justifyContent={'center'}>
    <img src={person.picture} className={useStyles().img} />
  </Box>
</ItemResponsive>

Photo.propTypes = { person: PropTypes.object.isRequired }
