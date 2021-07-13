import React from 'react'

import { Header } from 'user/header'
import { useStyle } from 'user/style'
import { Component } from 'user/component'

export const User = () => <div className={useStyle().main}>
  <Header />
  <Component />
</div>
