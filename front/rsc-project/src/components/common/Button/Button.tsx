import { ReactNode } from 'react'

type ButtonProps = {
  onClick: () => void
  children: ReactNode
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { onClick, children } = props
  return <button onClick={onClick}>{children}</button>
}
