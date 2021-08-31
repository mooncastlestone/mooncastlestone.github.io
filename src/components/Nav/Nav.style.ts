import { Theme } from "../../theme/theme"
import { css } from "@emotion/react"

type ContainerProps = {
  theme: Theme
  isClosed: boolean
}

export const NavStyle = (props: ContainerProps) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 0.1px solid #e0e0e0;
  padding: 0.5rem 1rem 0.3rem 1rem;
  background: ${props.theme.bgColor};
  opacity: 0.8;
  backdrop-filter: blur(10px);
  z-index: 1;
  transform: ${!props.isClosed ? null : "translateY(-50px)"};

  .image {
    margin-right: 0.4rem;
    cursor: pointer;
  }

  .left-box {
    display: flex;
    align-items: center;
  }

  .right-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .home-title {
    text-decoration: none;
    color: ${props.theme.fontColor};

    @media (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  .category {
    padding-right: 1rem;
    text-decoration: none;
    color: ${props.theme.fontColor};

    &:hover {
      color: #9e9e9e;
    }

    @media (max-width: 425px) {
      font-size: 0.8rem;
    }
  }
`
