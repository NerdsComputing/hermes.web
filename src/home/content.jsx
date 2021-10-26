import React from 'react'
import { Grid } from '@material-ui/core'

import { MarketingStuff } from 'home/marketing-stuff'
import { CharacterSection } from 'home/character-section'
import { HeadingSection } from 'home/heading-section'
import { FirstCharacter } from 'home/first-character'

export const Content = () => <Grid container>
  <HeadingSection />
  <FirstCharacter />
  <CharacterSection />
  <MarketingStuff />
</Grid>
