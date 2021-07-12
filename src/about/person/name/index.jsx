import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/person/name/style'
import { useName } from 'about/person/use-name'

export const Name = ({ person }) => <Grid item className={useStyles().root}>
  <h1>
    {useName(person)}
  </h1>
</Grid>

Name.propTypes = { person: PropTypes.object.isRequired }
