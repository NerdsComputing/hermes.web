import React from 'react'

import locationIcon from 'cameras/map/marker/icon/location_on_black_24dp.svg'
import { useStyles } from 'cameras/map/marker/icon/styles'

export const Icon = () => <img src={locationIcon} alt={'Location Icon'} className={useStyles().root} />
