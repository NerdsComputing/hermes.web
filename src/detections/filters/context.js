import React, { useContext as useReactContext, useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [filters, setFilters] = useState([])
  const [filterVariants, setFilterVariants] = useState(['Class', 'Score', 'Timestamp', 'Cameras'])

  return { filters, setFilters, filterVariants, setFilterVariants }
}
