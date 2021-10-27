import React from 'react'
import { Typography } from '@material-ui/core'

import { useStyles } from 'about/title/style'

export const Title = () => <Typography variant={'h4'} className={useStyles().root}>Hermes Team</Typography>
