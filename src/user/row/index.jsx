import React from 'react'
import { Button, CardActions, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Content } from 'user/row/content'
import { useStyle } from 'user/row/style'

export const Row = ({ id }) => <Grid container spacing={2} classes={useStyle().grid}>
  <CardActions>
    <Button>
      <Content id={id} />
    </Button>
  </CardActions>
</Grid>

Row.propTypes = { id: PropTypes.number.isRequired }

