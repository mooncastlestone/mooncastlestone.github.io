import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Preparing = () => {
    return (
        <div>
            <StaticImage
          src="../images/preparing.png"
          width={500}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          css={Image}
        />
        <div css={TextBox}>
            <span css={Text} style={{fontWeight: 'bold'}}>컨텐츠 준비중</span>
            <span css={Text}>입니다.</span>
        </div>
        </div>
    )
}

export default Preparing;

const Image = css`
    
`

const TextBox = css`
    text-align: center;
    margin-top: -1.3rem;
    width: 105%;
`

const Text = css`
    font-size: 1.5rem;
    color: #757575;
`

