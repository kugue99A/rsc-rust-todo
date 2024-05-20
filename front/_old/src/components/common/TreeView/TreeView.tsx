'use client'

import { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react'

import s from './TreeView.module.css'

type RecursiveItem = {
    id: number
    children?: RecursiveItem[]
    [key: string]: unknown
}

type TreeViewProps = {
    markup?: FC<{
        item: RecursiveItem
        isOpened: boolean
        onClick: Dispatch<SetStateAction<boolean>>
    }>
    item: RecursiveItem
}

const TreeView: FC<TreeViewProps> = (props) => {
    const { markup, item } = props
    const [isOpened, setIsOpened] = useState(true)

    return (
        <div>
            <div className={s.content}>
                {item.children && item.children.length > 0 && (
                    <button className={s.accordion} onClick={() => setIsOpened(!isOpened)}>
                        {isOpened ? 'Close' : 'Open'}
                    </button>
                )}
                {markup ? markup({ item, isOpened, onClick: setIsOpened }) : item.id}
            </div>
            {isOpened && (
                <div className={s.children}>
                    {item.children?.map((child) => (
                        <TreeView markup={markup} item={child} key={child.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default TreeView
