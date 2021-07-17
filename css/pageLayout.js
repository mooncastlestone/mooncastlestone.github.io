import { css } from "@emotion/react"

export const Container = css`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 0.1fr 0.2fr 0.6fr;
  align-items: center;
  margin-top: 3rem;
  justify-content: center;
`

export const Box = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: black;
`

export const Title = css`
  font-size: 2.5rem;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  text-align: center;
`

export const Description = css`
  margin-top: 1rem;
  color: #757575;
`
