import { css } from "@emotion/react"
import { Theme } from "../../theme/theme"

export const Container = (theme: Theme) => css`
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.bgColor};
  transition: 0.3s ease-in-out;
  border-right: 0.1px solid #e0e0e0;

  @media (max-width: 500px) {
    padding: 4rem 0 0 3rem;
  }

  .sidebar-box {
    margin-top: 5rem;
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
    color: ${theme.fontColor}
  }

  .icon-box {
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    color: ${theme.mdFontColor};
    transition: 0.2s ease-in-out;

    &:hover {
      color: #607D8B;
    }
  }
`
