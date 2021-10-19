import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const PostContainer = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 90%;
  margin-bottom: 3rem;
  box-shadow: 0 1.5px 2px -2px gray;

  .post.title {
    text-decoration: none;
    font-size: 1.4rem;
    color: ${theme.postTitle};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${theme.hoverEvent};
    }
  }

  .post.description {
    color: ${theme.fontColor};
  }

  .post.date {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: normal;
    color: ${theme.fontColor};
  }

  @media (max-width: 425px) {
    width: 100%;
    padding: 0rem 1rem;
    margin-top: 2.5rem;

    .post.title {
      font-size: 1.1rem;
    }

    .post.description {
      font-size: 0.9rem;
    }

    .post.date {
      font-size: 0.8rem;
    }
  }
`
