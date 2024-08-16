import { Text as TextComponent } from '@radix-ui/themes'

import { ReactNode } from 'react'

import s from './Text.module.css'

type TextProps = {
  children: ReactNode
  size: 'small' | 'medium' | 'large'
}

export const Text = (props: TextProps): JSX.Element => {
  const { children, size } = props
  return <TextComponent className={s[size]}>{children}</TextComponent>
}
