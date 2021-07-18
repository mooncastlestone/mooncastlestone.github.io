import * as React from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../css/pageLayout"

const PortfolioPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>Portfolio</div>
          <div css={Description}>개발자 문성석의 포트폴리오입니다.</div>
        </div>
        <div css={Box}>준비중입니다</div>
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </>
  )
}
export default PortfolioPage
