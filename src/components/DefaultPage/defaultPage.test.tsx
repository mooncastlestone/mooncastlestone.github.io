import React from "react"
import DefaultPage from "./index"
import { ThemeProvider } from "../../theme/ThemeContext"
import { render } from "@testing-library/react"

describe("<DefaultPage />", () => {
  it("matches snapshot", () => {
    const utils = render(
      <ThemeProvider>
        <DefaultPage></DefaultPage>
      </ThemeProvider>
    )
    expect(utils.container).toMatchSnapshot()
  })

  it("shows categories", () => {
    const utils = render(
      <ThemeProvider>
        <DefaultPage></DefaultPage>
      </ThemeProvider>
    )
    utils.getByText("Javascript")
    utils.getByText("React")
    utils.getByText("React Native")
    utils.getByText("Tech Interview")
    utils.getByText("Gatsby")
  })
})
