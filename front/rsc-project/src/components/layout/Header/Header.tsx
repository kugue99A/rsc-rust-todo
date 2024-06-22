import { ReactNode } from 'react'
import s from './Header.module.css'

type HeaderProps = {
  children: ReactNode
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { children } = props
  return <header>{children}</header>
}
