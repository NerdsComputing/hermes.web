import React from 'react'
import { Grid } from '@material-ui/core'

import { persons } from 'about/persons/persons'
import { Person } from 'about/person/person'

export const People = () => <Grid container justify={'center'}>
  {persons.map(person => <Person key={person} person={person} />)}
</Grid>
