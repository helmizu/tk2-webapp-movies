interface vtc {
  [key: string]: string
}

export const sortObjectByField = (key: string, sortBy: '' | 'asc' | 'desc') => (a: vtc, b: vtc) => {
  if (!sortBy) return 0;
  if (a[key] < b[key]) {
    return sortBy === 'asc' ? -1 : 1;
  }
  if (a[key] > b[key]) {
    return sortBy === 'asc' ? 1 : -1;
  }
  return 0;
}

export const getArrayStringUnique = (values: string[]) => {
  return values.filter((value, index, self) => self.indexOf(value.trim()) === index)
}
