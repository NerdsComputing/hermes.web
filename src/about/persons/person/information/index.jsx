import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'about/persons/person/information/wrapper'
import { Name } from 'about/persons/person/information/name'
import { Job } from 'about/persons/person/information/job'
import { Description } from 'about/persons/person/information/description'

export const Information = ({ person }) => <Wrapper>
  <Name name={person.name} />
  <Job job={person.job} />
  <Description description={person.description} />
</Wrapper>

Information.propTypes = { person: PropTypes.object.isRequired }
