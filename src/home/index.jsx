import React from 'react'
import { Footer } from 'footer/footer'

import { useStyles } from 'footer/styles'

export const Home = () => <div>
  <h1>Hermes Web</h1>
  <div className={useStyles().divHeight} />
  <Footer />
</div>
