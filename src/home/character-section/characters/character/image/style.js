import { makeStyles } from '@material-ui/core'

import { useStyleForVariant } from 'home/character-section/characters/character/image/use-style-for-variant'

export const useStyles = variant => makeStyles(useStyleForVariant(variant))
