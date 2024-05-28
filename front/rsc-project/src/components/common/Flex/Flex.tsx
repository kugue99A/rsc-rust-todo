import { Flex as FlexComponent } from '@radix-ui/themes'
import { ReactNode } from 'react'

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type Padding = {
  p?: Spacing
  px?: Spacing
  py?: Spacing
  pt?: Spacing
  pr?: Spacing
  pb?: Spacing
  pl?: Spacing
}

type Gap = {
  gap?: Spacing
  gapX?: Spacing
  gapY?: Spacing
}

type FlexProps = {
  children: ReactNode
  direction?: 'row' | 'column'
  justify?: 'start' | 'center' | 'end' | 'between'
  align?: 'start' | 'center' | 'end'
  width?: 'fit' | 'auto' | 'fill'
  height?: 'fit' | 'auto' | 'fill'
} & Padding &
  Gap

export const Flex = (props: FlexProps): JSX.Element => {
  const {
    children,
    direction = 'row',
    justify = 'start',
    align = 'start',
    width = 'fill',
    height = 'auto',
    ...spacing
  } = props

  return (
    <FlexComponent
      direction={direction}
      justify={justify}
      align={align}
      width={width}
      height={height}
      {...spacing}
    >
      {children}
    </FlexComponent>
  )
}
