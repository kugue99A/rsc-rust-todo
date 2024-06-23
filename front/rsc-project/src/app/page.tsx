import { Flex, Heading, Link, Text } from '@/components/common'

export default function Home() {
  return (
    <main>
      <Flex direction="column" justify="center" p="9">
        <Heading as="h1">aaaa</Heading>
        <Flex justify="center">aaaa</Flex>
        <Flex justify="center">
          <Link href={'/works'}>
            <Text size="medium">to works</Text>
          </Link>
        </Flex>
        <Flex justify="center">
          <Link href={`/works/${9}`}>
            <Text size="medium">to work 9</Text>
          </Link>
        </Flex>
      </Flex>
    </main>
  )
}
