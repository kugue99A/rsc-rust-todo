import { FC, ReactNode } from "react";

import s from './Card.module.css'

type CardProps = {
	children: ReactNode
}

const Card:FC<CardProps> = (props) => {
  const {children} = props
	return (<div className={s.root}>{children}</div>)
}

export default Card
