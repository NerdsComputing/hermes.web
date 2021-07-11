import React from 'react'
import PropTypes from 'prop-types'

import { Photo } from 'about/person/photo'
import { Information } from 'about/person/information'
import { PersonContainer } from 'about/components/person-container'
import { PersonItem } from 'about/components/person-item'

export const Person = ({ person }) => <PersonItem>
  <PersonContainer>
    <Photo person={person} />
    <Information person={person} />
  </PersonContainer>
</PersonItem>

Person.propTypes = { person: PropTypes.object.isRequired }
