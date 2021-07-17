import { css } from "@emotion/react"

export const Container = css`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 0.1fr 0.2fr 0.6fr;
  align-items: center;
  margin-top: 3rem;
`

export const Box = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = css`
  font-size: 2.5rem;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  text-align: center;
`

export const ContentBox = css`
  display: flex;
  width: 50%;
  justify-content: space-between;
`

export const Description = css`
  margin-top: 1rem;
  color: #757575;
`
