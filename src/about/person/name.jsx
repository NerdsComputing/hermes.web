import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/style'
import { useName } from 'about/person/use-name'

export const Name = ({ person }) => <Grid item className={useStyles().name}>
  <h1>
    {useName(person)}
  </h1>
</Grid>

Name.propTypes = { person: PropTypes.object.isRequired }
