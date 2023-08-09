import { FC } from "react"
import styles from './styles.module.scss'

type Content = {
  main?: boolean;
  title: string;
  contents: any;
  alignment: 'start' | 'center' | 'end';
  fullSize?: boolean;
  small?: boolean;
}

type Props = {
  content: Content
}

const Content: FC<Props> = ({ content }: Props) => {
  return (
    <div className={`${styles.content} ${styles[content.alignment]} ${content.fullSize ? styles.fullSize: ''} ${content.small ? styles.small: ''} ${content.main ? styles.main : ''}`}>
      <div className={styles.container}>
        <h3>{content.title}</h3>
        {content.contents}
      </div>
    </div>
  )
}

export default Content