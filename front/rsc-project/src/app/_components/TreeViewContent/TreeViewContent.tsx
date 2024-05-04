'use client'

import { Dispatch, FC, SetStateAction } from 'react'

import s from './TreeViewContent.module.css'

const TreeViewContent: FC<{
    item: any
    isOpened: boolean
    onClick: Dispatch<SetStateAction<boolean>>
}> = (props) => {
    const { item, isOpened, onClick } = props
    return (
        <div className={s.root}>
            <button onClick={() => onClick(!isOpened)}>open</button>
            <h1>{item?.name}</h1>
        </div>
    )
}

export default TreeViewContent
