export interface Theme {
  bgColor: string
  fontColor: string
}
export interface ThemeGroup {
  light: Theme
  dark: Theme
}
/**
 * @light theme
 */

export const light: Theme = {
  bgColor: "#EEF2F5",
  fontColor: "#616161",
}

/**
 * @dark theme
 */

export const dark: Theme = {
  bgColor: "#303242",
  fontColor: "#eee",
}

const mode: ThemeGroup = {
  light,
  dark,
}

export default mode
