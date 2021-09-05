import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const PostContainer = (theme: Theme) => css`
  width: 90%;
  height: 7rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 1.5px 2px -2px gray;

  @media (max-width: 425px) {
    padding: 0rem;
    width: 100%;
    margin-top: 2.5rem;
  }

  .post {
    // border: 1px solid red;
    
  }

  .post.title {
    text-decoration: none;
    font-size: 1.4rem;
    color: ${theme.postTitle};
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${theme.hoverEvent};
    }

    @media (max-width: 425px) {
      font-size: 1.1rem;
    }
  }

  .post.description {
    color: ${theme.fontColor};

    @media (max-width: 425px) {
      font-size: 0.9rem;
    }
  }

  .post.date {
    font-size: 0.9rem;
    color: ${theme.fontColor};
    margin-bottom: 1rem;
    justify-content: flex-end;
    display: flex;

    @media (max-width: 425px) {
      font-size: 0.8rem;
    }
  }
`
