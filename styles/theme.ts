export interface Theme {
  bgColor: string
  fontColor: string
  postTitle?: string
  categoryTitle?:string
}
export interface ThemeGroup {
  light: Theme
  dark: Theme
}

export const light: Theme = {
  bgColor: "#EEF2F5",
  fontColor: "#616161",
  postTitle: "black",
  categoryTitle: "#5C6BC0",
}

export const dark: Theme = {
  bgColor: "#303242",
  fontColor: "#eee",
  postTitle: "#eee",
  categoryTitle: "#9FA8DA"
}

const themeGroup: ThemeGroup = {
  light,
  dark,
}

export default themeGroup
