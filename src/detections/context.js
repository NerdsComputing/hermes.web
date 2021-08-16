import React, { useContext as useReactContext, useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)

  return { pageIndex, setPageIndex, pageSize, setPageSize }
}
