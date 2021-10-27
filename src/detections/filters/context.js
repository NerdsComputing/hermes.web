import React, { useContext as useReactContext, useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState([])
  const [filterVariants, setFilterVariants] = useState(['Class', 'Score', 'Timestamp', 'Cameras'])
  const [cameraVariants, setCameraVariants] = useState({})

  return { filters, setFilters, filterVariants, setFilterVariants, cameraVariants, setCameraVariants, open, setOpen }
}
