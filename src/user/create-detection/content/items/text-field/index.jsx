import React from 'react'
import PropTypes from 'prop-types'
import { Grid, TextField as MaterialTextField } from '@material-ui/core'

import { Wrapper } from 'user/create-detection/content/items/text-field/wrapper'
import { useStyles } from 'user/create-detection/content/items/text-field/style'

export const TextField = ({ text, icon }) => <Wrapper>
  <Grid item>
    {icon}
  </Grid>
  <Grid item>
    <MaterialTextField label={text} variant={'outlined'} classes={useStyles()} />
  </Grid>
</Wrapper>

TextField.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
}
