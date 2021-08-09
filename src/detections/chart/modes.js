export const modes = {
  hours: (array, entry) => array[Math.floor(new Date(entry.timestamp).getMonth() / 6)].push(entry),
  months: (array, entry) => array[Math.floor(new Date(entry.timestamp).getMonth() / 3)].push(entry),
  days: (array, entry) => array[Math.floor(new Date(entry.timestamp).getMonth() / 8)].push(entry),
}
