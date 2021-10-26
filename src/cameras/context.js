import React, { useContext as useReactContext, useState } from 'react'

import { useCameraFilter } from 'cameras/hooks/use-camera-filter'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [searchPhrase, setSearchPhrase] = useState(...useCameraFilter())
  const [searchInput, setSearchInput] = useState(...useCameraFilter())
  const [items, setItems] = useState([])
  const [isExpanded, setIsExpanded] = useState(false)

  return { searchPhrase, setSearchPhrase, searchInput, setSearchInput, items, setItems, isExpanded, setIsExpanded }
}
