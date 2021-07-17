import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"


const Nav = () => {
  return (
    <div css={Container}>
      <div css={LeftBox}>
        <span css={Img}>O</span>
        <span>Moon.log</span>
      </div>
      <div css={RightBox}>
        <Link css={Category} to="/">Blog</Link>
        <Link css={Category} to="/portfolio">Portfolio</Link>
        <span css={Category}>About</span>
      </div>
    </div>
  )
}

export default Nav

const Container = css`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E0E0E0;
  padding-bottom: 0.5rem;
`

const LeftBox = css`
  width: 10%;
`

const RightBox = css`
  width: 15%;
`

const Img = css`
    padding: 0 0 0 1rem;
`

const Category = css`
    padding-right: 1rem;
`
