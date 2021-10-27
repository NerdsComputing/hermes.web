import { useContext } from 'detections/filters/context'
import {useCallback} from 'react'

export const useOnClose = () => {
    const { setOpen } = useContext()
    
    return useCallback(() => {
        setOpen(false)
    }, [setOpen])
}