import { Route } from 'next'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type LinkProps<T extends string> = {
  href: Route<T>
  children: ReactNode
}

export const Link = <T extends string>(props: LinkProps<T>) => {
  const { href, children } = props
  return <NextLink href={href}>{children}</NextLink>
}
