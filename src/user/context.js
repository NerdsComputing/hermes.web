import React, { useContext as useReactContext, useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [openDialog, setOpenDialog] = useState(true)

  return { openDialog, setOpenDialog }
}
