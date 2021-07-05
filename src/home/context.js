import React, { useContext as useReactContext, useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [index, setIndex] = useState(0)
  const [slideIn, setSlideIn] = useState(true)
  const [slideDirection, setSlideDirection] = useState('down')

  return { index, setIndex, slideIn, setSlideIn, slideDirection, setSlideDirection }
}
