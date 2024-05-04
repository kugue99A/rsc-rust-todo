import { ReactNode } from 'react'

type FlexProps = {
    children: ReactNode
}

export function Flex(props: FlexProps) {
    const { children } = props
    return <div>{children}</div>
}
