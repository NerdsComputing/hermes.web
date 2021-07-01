import React from 'react'

import { Footer } from 'footer/footer'
import { useStyles } from 'footer/styles'

export const Home = () => <div className={useStyles().divPageHeight}>
  <div className={useStyles().divHeight}>
    <h1 className={useStyles().h1}>Hermes Web</h1>
  </div>
  <Footer />
</div>
