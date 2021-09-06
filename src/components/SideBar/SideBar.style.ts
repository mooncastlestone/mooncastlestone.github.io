import { css, keyframes } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const Container = (theme: Theme, isOpen: boolean) => css`
  position: fixed;
  width: 17%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.bgColor};
  transition: 0.3s ease-in-out;
  box-shadow: 1px 0 2px -2px gray;

  .sidebar-box {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    width: 35%;
    display: flex;
    justify-content: space-between;
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

  @media (max-width: 425px) {
    width: 80%;
    position: ${!isOpen ? "absolute" : null};
    left: ${!isOpen ? "-23rem" : "0rem"};
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: left 0.3s ease;
`
