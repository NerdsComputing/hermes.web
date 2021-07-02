import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from 'about/style'
import PropTypes from 'prop-types'
import { useName } from 'about/person/use-name'

export const Name = ({ person }) => <Grid item className={useStyles().name}>
  <h1>
    {useName(person)}
  </h1>
</Grid>

Name.propTypes = { person: PropTypes.object.isRequired }
