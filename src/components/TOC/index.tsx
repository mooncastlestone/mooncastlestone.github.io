import { useContext } from "react"
import { ThemeContext } from "../../theme/ThemeContext"
import THEME from "../../theme/theme"

function TableOfContents(items: any) {
  const [themeMode] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <nav>
      <div
        className="TableOfContents"
        dangerouslySetInnerHTML={{ __html: items.items }}
      ></div>
    </nav>
  )
}

export default TableOfContents
