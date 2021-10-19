import { css } from "@emotion/react"
import { Theme } from "../src/theme/theme"

const GlobalStyle = (theme: Theme, isOpen: boolean) => css`
  * {
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.bgColor};
    transition: 0.3s ease-in-out;
  }

  .top {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    background-color: ${theme.bgColor};
    transition: 0.3s ease-in-out;
  }

  .home {
    width: 83%;
  }

  .menu-button {
    display: none;
    border: none;
    background: none;
    color: ${theme.fontColor};
  }

  @media (max-width: 768px) {
    .menu-button {
      display: inline;
      position: fixed;
      top: ${isOpen ? "1rem" : "0.8rem"};
      left: ${isOpen ? "55%" : "1rem"};
      z-index: 3;
      transition: left 0.3s ease;
    }
  }

  @media (max-width: 425px) {
    .menu-button {
      top: ${isOpen ? "1rem" : null};
      left: ${isOpen ? "70%" : "1rem"};
    }
  }
`

export default GlobalStyle
