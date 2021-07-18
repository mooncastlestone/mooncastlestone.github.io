import * as React from "react"
import PropTypes, { string } from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { css } from "@emotion/react"

const Blog = () => {
  return (
    <div css={Container}>
      <span css={Title}>Blog</span>
      <div>
        <div css={CategoryBox}>
          <span css={Number}>01</span>
          <Link to="/javascript" css={Category}>
            Javascript
          </Link>
        </div>
        <div css={CategoryBox}>
          <span css={Number}>02</span>
          <Link to="/react" css={Category}>
            React
          </Link>
        </div>
        <div css={CategoryBox}>
          <span css={Number}>03</span>
          <Link to="/react-native" css={Category}>
            React Native
          </Link>
        </div>
        <div css={CategoryBox}>
          <span css={Number}>04</span>
          <Link to="/gatsby" css={Category}>
            Gatsby
          </Link>
        </div>
        <div css={CategoryBox}>
          <span>05</span>
          <Link to="/interview" css={Category}>Tech Interview</Link>
        </div>
      </div>
    </div>
  )
}

export default Blog

const Container = css`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 8rem 0 0 15rem;
  flex-direction: column;
`
const Title = css`
  font-size: 2.5rem;
  border-bottom: 1px solid #BDBDBD;
  width: 7%;
  margin-left: 2rem;
  color: #616161;
  font-family: "Athiti";
`

const CategoryBox = css`
  margin-top: 3rem;
  display: flex;
  align-items: center;
`
const Category = css`
  font-size: 2rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #616161;
  font-family: "Athiti";
`

const Number = css`
  font-family: "Athiti";
`
