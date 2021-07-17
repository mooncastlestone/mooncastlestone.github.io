import React, { useState } from "react"
import { Box, Container, ContentBox, Title } from "../../css/pageLayout"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Link } from "gatsby"

interface ContentType {
    image: string;
    title: string;
    description: string;
}

const ContentList = () => {
  const [contentsData, setContentsData] = useState([
    {
      image: "javascript.png",
      title: "Javascript",
      description: "자바스크립트(ES6) 관련된 개념들을 정리하였습니다.",
    },
  ])

  return (
    <>
      {contentsData.map(el => (
        <Link to="javascript" css={Box}>
          <div css={ContentBox}>
            <div css={Content}>
              <StaticImage
                src={`../images/${el.image}`}
                width={100}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                css={ContentImg}
              />
              <div css={ContentText}>
                <div css={ContentTitle}>Javascript</div>
                <div css={ContentDes}>
                  자바스크립트(ES6) 관련된 개념들을 정리하였습니다.
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
export default ContentList

const Content = css`
  width: 15rem;
  height: 18rem;
  background: white;
  display: grid;
  grid-template-rows: 0.6fr 0.4fr;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: 0.2s ease-in-out;

  &: hover {
    transform: translateY(-8px);
  }
`

const ContentImg = css`
  object-fit: cover;
`

const ContentText = css`
  padding: 1rem;
`

const ContentTitle = css`
  font-size: 1.2rem;
`

const ContentDes = css`
  font-size: 1rem;
  margin-top: 1rem;
  color: #757575;
`
