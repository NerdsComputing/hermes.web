import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'about/persons/person/wrapper'
import { Information } from 'about/persons/person/information'
import { Image } from 'about/persons/person/image'

export const Person = ({ person }) => <Wrapper>
  <Image picture={person.picture} />
  <Information person={person} />
</Wrapper>

Person.propTypes = { person: PropTypes.object.isRequired }
