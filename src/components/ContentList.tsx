import React, { useState } from "react"
import { Box, Title } from "../../css/pageLayout"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import {
  Container,
  CategoryBox,
  CategoryDes,
  CategoryImg,
  CategoryText,
  CategoryTitle,
} from "../../css/category"

const ContentList = () => {
  return (
    <div css={Container}>
      <div css={CategoryBox}>
        <StaticImage
          src={`../images/javascript.png`}
          width={100}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          css={CategoryImg}
        />
        <div css={CategoryText}>
          <div css={CategoryTitle}>Javascript</div>
          <div css={CategoryDes}>
            자바스크립트(ES6) 관련된 개념들을 정리하였습니다.
          </div>
        </div>
      </div>
      <div css={CategoryBox}>
        <StaticImage
          src={`../images/javascript.png`}
          width={100}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          css={CategoryImg}
        />
        <div css={CategoryText}>
          <div css={CategoryTitle}>Javascript</div>
          <div css={CategoryDes}>
            자바스크립트(ES6) 관련된 개념들을 정리하였습니다.
          </div>
        </div>
      </div>
      <div css={CategoryBox}>
        <StaticImage
          src={`../images/javascript.png`}
          width={100}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          css={CategoryImg}
        />
        <div css={CategoryText}>
          <div css={CategoryTitle}>Javascript</div>
          <div css={CategoryDes}>
            자바스크립트(ES6) 관련된 개념들을 정리하였습니다.
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentList
