import { Card, TreeView } from '@/components/common'
import Link from 'next/link'
import { TreeViewContent } from './_components'

export default function Home() {
    const treeContent = {
        id: 1,
        name: 'node 1',
        children: [
            {
                id: 11,
                name: 'node 11',
                children: [
                    {
                        id: 111,
                        name: 'node 111',
                    },
                ],
            },
            {
                id: 12,
                name: 'node 12',
                children: [
                    {
                        id: 121,
                        name: 'node 121',
                    },
                    {
                        id: 122,
                        name: 'node 122',
                    },
                ],
            },
        ],
    }

    return (
        <div>
            <h1>This is Home!!!</h1>
            <Link href="/calendar">Go to Calendar</Link>
            <Link href="/tasks">Go to Tasks</Link>
            <Card>
                <h2>test test</h2>
                <TreeView markup={TreeViewContent} item={treeContent} />
            </Card>
        </div>
    )
}
