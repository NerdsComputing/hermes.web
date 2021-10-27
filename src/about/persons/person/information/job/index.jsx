import React from 'react'
import { Chip } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/persons/person/information/job/style'
import { ItemWrapper } from 'about/persons/person/information/item-wrapper'

export const Job = ({ job }) => <ItemWrapper>
  <Chip label={job} classes={useStyles()} />
</ItemWrapper>

Job.propTypes = { job: PropTypes.string.isRequired }
