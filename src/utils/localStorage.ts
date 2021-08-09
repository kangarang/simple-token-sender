export const getItem = (key: string) => localStorage.getItem(key)
export const setItem = (key: string, value: any) => localStorage.setItem(key, value)
export const removeItem = (key: string) => localStorage.removeItem(key)

export const loadState = (item = 'state') => {
  try {
    const serializedState = getItem(item)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    setItem('state', serializedState)
  } catch (err) {
    // Ignore write errors.
  }
}
