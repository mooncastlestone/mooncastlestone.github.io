import { css } from "@emotion/react"
import { Theme } from "../src/theme/theme"

export const Container = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 83%;
  height: 100vh;

  .post-box {
    width: 70%;
  }

  .post-introbox {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
  }

  .post-title {
    margin-top: 1rem;
    color: ${theme.mdFontColor};
  }

  .post-date {
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;
    font-weight: normal;
    color: ${theme.mdFontColor};
  }

  .post-description {
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.1rem;
    color: ${theme.mdFontColor};
  }

  .comment-box {
    margin: 3rem 0 3rem 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    .post-box {
      width: 90%;
    }

    .post-title {
      font-size: 1.4rem;
    }

    .post-date {
      font-size: 0.8rem;
    }

    .post-description {
      font-size: 1rem;
    }
  }
`
