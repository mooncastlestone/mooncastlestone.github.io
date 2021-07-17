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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.2s ease-in-out;
  border-radius: 3%;

  &: hover {
    transform: translateY(-8px);
  }
`

export const CategoryImg = css`
  object-fit: cover;
  border-radius: 3% 3% 0 0;
  border-bottom: 1px solid #E0E0E0
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
