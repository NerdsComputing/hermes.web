import React from 'react'
import { Grid } from '@material-ui/core'

import { futureCharacters } from 'home/character-section/characters/items'
import { Character } from 'home/character-section/characters/character'

export const Characters = () => <Grid container>
  {
    futureCharacters.map((item, index) => <Character item={item} key={index} />)
  }
</Grid>
