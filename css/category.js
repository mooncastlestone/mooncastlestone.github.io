import { css } from "@emotion/react"

export const Container = css`
  display: flex;
  width: 65vw;
  justify-content: space-between;
`

export const CategoryBox = css`
  width: 15rem;
  height: 18rem;
  background: white;
  display: grid;
  grid-template-rows: 0.6fr 0.4fr;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: 0.2s ease-in-out;

  &: hover {
    transform: translateY(-8px);
  }
`

export const CategoryImg = css`
  object-fit: cover;
`

export const CategoryText = css`
  padding: 1rem;
`

export const CategoryTitle = css`
  font-size: 1.2rem;
`

export const CategoryDes = css`
  font-size: 1rem;
  margin-top: 1rem;
  color: #757575;
`
