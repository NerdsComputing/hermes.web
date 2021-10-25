import React from 'react'
import { Grid } from '@material-ui/core'

import { Marketing } from 'home/marketing'
import { CharacterSection } from 'home/character-section'
import { HeadingSection } from 'home/heading-section'
import { FirstCharacter } from 'home/first-character'

export const Content = () => <Grid container>
  <HeadingSection />
  <FirstCharacter />
  <CharacterSection />
  <Marketing />
</Grid>
