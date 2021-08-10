import React from "react"
import Preparing from "./index"
import { ThemeProvider } from "../../theme/ThemeContext"
import { render } from "@testing-library/react"

describe("<Preparing /> ", () => {
  it("matches snapshot", () => {
    const utils = render(
      <ThemeProvider>
        <Preparing></Preparing>
      </ThemeProvider>
    )

    expect(utils.container).toMatchSnapshot()
  })

  it("shows a notice", () => {
    const utils = render(
      <ThemeProvider>
        <Preparing></Preparing>
      </ThemeProvider>
    )
    utils.getByText("컨텐츠 준비중")
    utils.getByText("입니다.")
  })
})
