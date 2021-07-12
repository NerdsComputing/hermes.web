import React from 'react'
import { CardHeader } from '@material-ui/core'

import { useStyles } from 'detection/detection-card/title/style'

export const Title = () => <CardHeader title={'Detection name'}
                                       className={useStyles().root} />
