import React, { useContext } from "react"
import { Box, Container, Title, Description } from "../../styles/pageLayout"
import Layout from "../components/Layout"
import themeGroup, { Theme } from "../../styles/theme"
import { ThemeContext } from "../components/ThemeContext"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const AboutPage = () => {
  const [themeMode] = useContext(ThemeContext)
  const theme = themeGroup[themeMode]

  return (
    <Layout pageTitle="about">
      <div css={Container}>
        <div css={Box}>
          <div css={Title(theme)}>About</div>
          <div css={Description(theme)}>SEONG SEOK MOON</div>
        </div>
        <div css={Box}>
          <StaticImage
            src="../images/me.jpeg"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            placeholder="blurred"
            css={Image}
          />
        </div>
        <div css={IntroBox}>
          <p css={IntroText(theme)}>
            코딩 부트캠프에서 처음 접한 개발 공부에 빠져 아주 즐겁게 공부하고
            있습니다 :) UI, UX에 관심이 있어 프론트엔드 개발자의 길을 걸어가고
            있습니다.
          </p>
          <p css={IntroText(theme)}>
            개발 공부를 하면서 느꼈던 것 중 하나는 결과도 중요하지만, 과정이 더
            중요하다는 것이었습니다. 그 과정 속에서 중요하고 가치 있는 것들을
            정리하여 사람들에게 공유하고 싶은 마음에 이 블로그를 만들게
            되었습니다.
          </p>
          <div css={UnderLine(theme)}></div>
          <p css={IntroText(theme)}>
            {" "}
            Github:{" "}
            <a css={SocialLink(theme)} href="https://github.com/mooon3356">
              https://github.com/mooon3356
            </a>
          </p>
          <p css={IntroText(theme)}>
            {" "}
            Gmail :{" "}
            <a
              css={SocialLink(theme)}
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mooon3356@gmail.com"
            >
              mooon3356@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

const Image = css`
  width: 32rem;
  height: 18rem;
  margin-top: 1rem;

  @media (max-width: 420px) {
    width: 100%;
    height: 15rem;
  }
`

const IntroBox = css`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 2rem 5rem 0 5rem;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 420px) {
    width: 100%;
    padding: 2rem 0 2rem 0;
  }
`

const IntroText = (theme: Theme) => css`
  color: ${theme.fontColor};
  margin-bottom: 0.5rem;

  @media (max-width: 420px) {
    font-size: 0.9rem;
  }
`

const UnderLine = (theme: Theme) => css`
  width: 100%;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 1rem;
`

const SocialLink = (theme: Theme) => css`
  color: ${theme.fontColor};

  &:hover {
    color: ${theme.categoryTitle};
  }
`