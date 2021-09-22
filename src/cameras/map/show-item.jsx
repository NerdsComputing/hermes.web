export const showItem = key => items => {
  items[key].show = !items[key].show

  return items
}
