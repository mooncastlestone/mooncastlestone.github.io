export interface Theme {
  bgColor: string
  fontColor: string
  postTitle: string
  hoverEvent: string
  mdFontColor: string
}
export interface ThemeGroup {
  light: Theme
  dark: Theme
}

export const light: Theme = {
  bgColor: "#ECEFF1",
  fontColor: "#616161",
  postTitle: "black",
  hoverEvent: "#7986CB",
  mdFontColor: "black",
}

export const dark: Theme = {
  bgColor: "#303242",
  fontColor: "#eee",
  postTitle: "#eee",
  hoverEvent: "#7986CB",
  mdFontColor: "#eee",
}

const themeGroup: ThemeGroup = {
  light,
  dark,
}

export default themeGroup
