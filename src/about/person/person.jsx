import React from 'react'
import PropTypes from 'prop-types'

import { Photo } from 'about/person/photo'
import { Description } from 'about/person/description'
import { PersonContainer } from 'about/components/person-container'
import { PersonItem } from 'about/components/person-item'

export const Person = ({ person }) => <PersonItem>
  <PersonContainer>
    <Photo person={person} />
    <Description person={person} />
  </PersonContainer>
</PersonItem>

Person.propTypes = { person: PropTypes.object.isRequired }
