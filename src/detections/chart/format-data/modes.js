export const modes = {
  hours: entry => Math.floor(new Date(entry.timestamp).getMonth() / 6),
  months: entry => Math.floor(new Date(entry.timestamp).getMonth() / 3),
  days: entry => Math.floor(new Date(entry.timestamp).getMonth() / 8),
}
