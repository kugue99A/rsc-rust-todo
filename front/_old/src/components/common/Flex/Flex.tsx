import { css } from '@styled-system/css'
import { ReactNode } from 'react'

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type FlexProps = {
    pa?: '0' | '1' | '2' | '3'
    children: ReactNode
}

export function Flex(props: FlexProps) {
    const { children, pa = '0' } = props
    return <div className={css({ padding: pa })}>{children}</div>
}
