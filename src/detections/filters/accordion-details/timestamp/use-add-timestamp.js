import { useCallback } from 'react'

import { useContext } from 'detections/context'

export const useAddTimestamp = name => {
  const { setFieldValue } = useContext()

  return useCallback(event => {
    setFieldValue(`timestamp.${name}`, event)
  }, [name, setFieldValue])
}
