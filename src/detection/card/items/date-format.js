export const dateFormat = timestamp => {
  const date = new Date(timestamp)

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${
    date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
