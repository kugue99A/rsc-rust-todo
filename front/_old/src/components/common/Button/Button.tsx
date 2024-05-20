'use client'

import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
}

export default function Button (props: ButtonProps) {
  const {children} = props

  return (
    <button>{children}</button>
  )
}
