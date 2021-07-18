import * as React from "react"
import Nav from "../components/Nav"
import { Box, Container, Title, Description } from "../../css/pageLayout"
import { Link } from 'gatsby'

const TechInterviewPage = () => {
  return (
    <>
      <Nav />
      <div css={Container}>
        <div css={[Box]}>
          <div css={Title}>Tech Interview</div>
          <div css={Description}>
            기술 면접을 준비하며 정리한 개념들을 정리하였습니다.
          </div>
        </div>
        <div css={Box}>
          <div>
              <Link to="/interview/post-1">브라우저 동작 원리</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default TechInterviewPage
