import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

const Sidebar = () => {
  return (
    <Container>
      <StaticImage
        src="../images/profile.jpeg"
        width={100}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem`, objectFit: `cover` }}
      />
      <h4>개발자 문성석</h4>
      <p style={{ fontSize: "0.9rem" }}>
        타입스크립트를 기반으로 한 리액트와 리액트 네이티브 개발을 좋아합니다 🙂
      </p>
      <Footer>© All rights reserved.</Footer>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  padding: 5rem 0rem 0rem 5rem;
`

const Footer = styled.div`
  color: #757575;
  font-size: 0.8rem;
`