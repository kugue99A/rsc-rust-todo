import { Text } from '@/components/common'

export default function WorkPage({ params }: { params: { workId: string } }) {
  return <Text size="medium">hiojio{params.workId}</Text>
}
