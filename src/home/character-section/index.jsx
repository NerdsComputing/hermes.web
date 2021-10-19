import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { Character } from 'home/character-section/character'
import { featureCharacters } from 'home/character-section/items'
import { useSubtitleStyle } from 'home/character-section/hooks/use-subtitle-style'
import { useGridStyle } from 'home/character-section/hooks/use-grid-style'

export const CharacterSection = () => <Grid item justify={'left'} classes={useGridStyle()}>
  <Typography color={'primary'} classes={useSubtitleStyle()}>Feature Characters</Typography>
  <Grid container>
    {
      featureCharacters.map((item, index) => <Character item={item} key={index} />)
    }
  </Grid>
</Grid>
