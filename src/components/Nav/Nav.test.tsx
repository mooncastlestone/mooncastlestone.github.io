import React from "react"
import Nav from "./index"
import { ThemeProvider } from "../../theme/ThemeContext"
import { render } from "@testing-library/react"

describe("<Nav />", () => {
  it("matches snapshot", () => {
    const utils = render(
      <ThemeProvider>
        <Nav></Nav>
      </ThemeProvider>
    )
    expect(utils.container).toMatchSnapshot()
  })

  it("shows the links correctly", () => {
    const utils = render(
      <ThemeProvider>
        <Nav></Nav>
      </ThemeProvider>
    )
    utils.getByText("Moon.log")
    utils.getByText("Blog")
    utils.getByText("Portfolio")
    utils.getByText("About")
  })
})
