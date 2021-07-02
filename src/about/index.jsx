import React from 'react'

import { useStyles } from 'about/style'
import { Mapping } from 'about/persons/mapping'

export const About = () => <>
  <h1 className={useStyles().title}>Hermes Team</h1>
  <Mapping />
</>
