export const buildDatasets = ([key, value]) => ({
  label: key,
  data: value,
  backgroundColor: `#${((1 << 24) * Math.random() | 0).toString(16)}`,
})
