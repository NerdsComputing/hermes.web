import React from 'react'

import locationIcon from 'cameras/map/marker/icon/owl-pin-transparent.png'
import { useStyles } from 'cameras/map/marker/icon/styles'

export const Icon = () => <img src={locationIcon} alt={'Location Icon'} className={useStyles().root} />
