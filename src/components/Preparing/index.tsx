import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { ThemeContext } from "../../theme/ThemeContext"
import THEME, { Theme } from "../../theme/theme"

const Preparing = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = THEME[themeMode]

  return (
    <div css={Wrapper(theme)}>
      <StaticImage
        src="../../images/preparing.png"
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="preparing"
        placeholder="blurred"
        className="image"
      />
      <div className="text-box">
        <span className="text">컨텐츠 준비중</span>
        <span className="text">입니다.</span>
      </div>
    </div>
  )
}

export default Preparing

const Wrapper = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-right: 8rem;

  .image {
    width: 30rem;
  }

  .text-box {
    width: 100%;
    margin-top: -1.3rem;
    text-align: center;

  }

  .text {
    font-size: 1.5rem;
    color: ${theme.fontColor};
    font-weight: bold;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`
