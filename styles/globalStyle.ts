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

  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    z-index: 2;

    @media (max-width: 768px) {
      background: ${theme.bgColor};
    }

    @media (max-width: 425px) {
      background: ${theme.bgColor};
    }
  }

  .home {
    width: 83%;
  }

  .menu-icon {
    position: fixed;
    top: 0.8rem;
    left: -1rem;
    color: ${theme.fontColor};
  }

  @media (max-width: 768px) {
    .menu-icon {
      position: fixed;
      top: ${isOpen ? "1rem" : null};
      left: ${isOpen ? "55%" : "1rem"};
      z-index: 3;
      transition: left 0.3s ease;
    }
  }

  @media (max-width: 425px) {
    .menu-icon {
      position: fixed;
      top: ${isOpen ? "1rem" : null};
      left: ${isOpen ? "70%" : "1rem"};
      z-index: 3;
      transition: left 0.3s ease;
    }
  }
`

export default GlobalStyle
