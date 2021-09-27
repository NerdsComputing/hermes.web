import { useContext } from 'cameras/context'

export const useSortItems = () => {
  const { setItems } = useContext()

  return setItems(items => {
    items.sort((a, b) => Number(a.latitude) - Number(b.latitude))

    return items
  })
}
