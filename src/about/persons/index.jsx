import React from 'react'

import { Wrapper } from 'about/persons/wrapper'
import { persons } from 'about/persons/persons'
import { Person } from 'about/persons/person'

export const Persons = () => <Wrapper>
  {
    persons.map((person, key) => <Person person={person} key={key} />)
  }
</Wrapper>
