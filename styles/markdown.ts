import { css } from "@emotion/react"
import { Theme } from "../src/theme/theme"

export const Container = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 83%;
  height: 100vw;

  .post-box {
    width: 70%;
  }

  .post-introbox {
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
  }

  .post-title {
    color: ${theme.mdFontColor};
    margin-top: 1rem;
  }

  .post-date {
    color: ${theme.mdFontColor};
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;
  }

  .post-description {
    font-size: 1.1rem;
    margin-top: 2rem;
    color: ${theme.mdFontColor};
    line-height: 2rem;
  }

  .comment-box {
    margin: 3rem 0 3rem 0;
  }

  @media (max-width: 768px) {
    width: 100%;

    .post-box {
      width: 85%;
    }

    .post-introbox {
    }

    .post-title {
    }

    .post-date {
    }

    .post-description {
    }
  }

  @media (max-width: 425px) {
    .post-box {
      width: 90%;
    }

    .post-introbox {
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

export const TocContainer = (theme: Theme) => css`
  position: fixed;
  border-left: 1px solid #bdbdbd;
  top: 1;
  right: 0;
  width: 17rem;
  padding: 0 2rem 0 1rem;

  @media (max-width: 1000px) {
    display: none;
  }
`
