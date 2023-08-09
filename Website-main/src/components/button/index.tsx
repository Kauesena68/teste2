import { FC } from "react"
import styles from './styles.module.scss'

type Props = {
  text: string;
  type: "primary" | "secundary";
  onClick?: () => void;
}

const Button: FC<Props> = ({text, type, onClick}) => {
  return <div className={styles.webButton} onClick={() => onClick && onClick()}>
    <button className={styles[type]}>{text}</button>
  </div>
}

export default Button