import React from 'react'
import { Typography } from '@material-ui/core'

import { useStyles } from 'detection/card/items/style'
import { useItem } from 'detection/card/use-item'
import { useOnClick } from 'detection/card/items/camera/hooks/use-on-click'

export const Item = () => <>
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    Camera:
  </Typography>
  <Typography variant={'h6'} align={'center'} className={useStyles().linkProps} {...useOnClick()}>
    {`${useItem().camera.id}`}
  </Typography>
</>
