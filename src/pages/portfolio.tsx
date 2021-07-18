import * as React from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Preparing from '../components/Preparing'

const PortfolioPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>Portfolio</div>
          <div css={Description}>개발자 문성석의 포트폴리오입니다.</div>
        </div>
        <Preparing />
        <div css={Box}>
          <div></div>
        </div>
      </div>
    </>
  )
}
export default PortfolioPage
