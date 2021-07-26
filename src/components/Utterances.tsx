import React, { createRef, useLayoutEffect } from "react"

const src = "https://utteranc.es/client.js"

type IUtterancesProps = {
  repo: string
  theme: string
}

const Utterances = React.memo(({ repo, theme }: IUtterancesProps) => {
  const containerRef = createRef<HTMLDivElement>()

  useLayoutEffect(() => {
    const utterances = document.createElement("script")

    const attributes = {
      src,
      repo,
      theme,
      "issue-term": "pathname",
      label: "✨💬 comments ✨",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current!.appendChild(utterances)
  }, [repo])

  return <div ref={containerRef} />
})

Utterances.displayName = "Utterances"

export default Utterances
