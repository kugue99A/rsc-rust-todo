import { Heading as HeadingComponent } from '@radix-ui/themes'

type HeadingProps = {
  children: string
  as: 'h1' | 'h2' | 'h3' | 'h4'
}

export const Heading = (props: HeadingProps): JSX.Element => {
  const { children, as } = props
  return <HeadingComponent as={as}>{children}</HeadingComponent>
}
