import { Grid as GridComponent } from '@radix-ui/themes'
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

type GridProps = {
  children: ReactNode
  rows: string
  columns: string
} & Padding &
  Gap

export const Grid = (props: GridProps): JSX.Element => {
  const { children, rows, columns, ...spacing } = props
  return (
    <GridComponent rows={rows} columns={columns} {...spacing}>
      {children}
    </GridComponent>
  )
}
