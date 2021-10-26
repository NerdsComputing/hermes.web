import React from 'react'
import { Grid } from '@material-ui/core'

import { MarketingStuff } from 'home/marketing-stuff'
import { CharacterSection } from 'home/character-section'
import { HeadingSection } from 'home/heading-section'
import { FirstCharacter } from 'home/first-character'
import { Queries } from 'home/queries'

export const Content = () => <Grid container>
  <HeadingSection />
  <Queries />
  <FirstCharacter />
  <CharacterSection />
  <MarketingStuff />
</Grid>
