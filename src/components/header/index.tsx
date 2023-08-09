import { FC } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import Button from '../button';

import Logo from '../../assets/logo.png'

type NavItem = {
  text: string;
  url: string;
}

const Header: FC = () => {
  const navItems: NavItem[] = [
    {
      text: 'About us',
      url: ''
    },
    {
      text: 'Buy Token',
      url: ''
    },
    {
      text: 'Docs & Whitepaper',
      url: ''
    },
    {
      text: 'FAQ',
      url: ''
    },
    {
      text: 'Contact',
      url: ''
    },
  ]

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.navigation}>
        {
          navItems.map((item: NavItem, index: number) => {
            return (
              <Link to={item.url} className={styles.item} key={index}>{item.text}</Link>
            )
          })
        }
        <Button text='Launch App' type='primary' onClick={() => false} />
      </div>
    </div>
  )
}

export default Header