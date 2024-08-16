import { ReactNode } from 'react'

type DrawerProps = {
  children: ReactNode
}

export const Drawer = (props: DrawerProps): JSX.Element => {
  const { children } = props
  return (
    <dialog>
      <section>
        <div>{children}</div>
      </section>
    </dialog>
  )
}
