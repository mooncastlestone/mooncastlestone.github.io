import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const Container = (theme: Theme, isOpen: boolean) => css`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 17%;
  height: 100vh;
  background: ${theme.bgColor};
  transition: 0.3s ease-in-out;
  box-shadow: 1px 0 2px -2px gray;

  .sidebar-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3rem;
  }

  .profile {
    width: 10rem;
    height: 10rem;
    border-radius: 70%;
    margin-bottom: 3rem;
  }

  .intro {
    color: ${theme.fontColor};
  }

  .icon-box {
    display: flex;
    justify-content: space-between;
    width: 35%;
    margin: 1rem 0 1rem 0;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    color: ${theme.mdFontColor};
    transition: 0.3s ease-in;

    &:hover {
      color: ${theme.hoverEvent};
    }
  }

  @media (max-width: 768px) {
    width: 60%;
    position: ${!isOpen ? "absolute" : null};
    left: ${!isOpen ? "-40rem" : "0rem"};
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: left 0.3s ease;

    .icon-box {
      width: 20%;
    }
  }

  @media (max-width: 425px) {
    width: 80%;
    position: ${!isOpen ? "absolute" : null};
    left: ${!isOpen ? "-23rem" : "0rem"};
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: left 0.3s ease;

    .icon-box {
      width: 25%;
    }
  }
`
