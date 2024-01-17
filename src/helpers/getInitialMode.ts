export const storageKey = 'mode'

type mode = 'dark' | 'light'

/**
 * Sets the initial mode of the dark mode slice. 
 * 
 * Gives priority to the mode in local storage over the system preference.
 * @returns Whether to initially use dark or light mode.
 */
const getInitialMode = (): mode => {
  // Check if mode preference is in storage. If it is, immediately return it.
  const modeInStorage = localStorage.getItem(storageKey)

  if (modeInStorage) {
    return modeInStorage as mode
  }

  // If the preference is not in storage, check for the system settings.
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  return prefersDark ? 'dark' : 'light'
}

export default getInitialMode