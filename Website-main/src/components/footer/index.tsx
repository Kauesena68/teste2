import { FC } from "react"
import styles from './styles.module.scss'

import Logo from '../../assets/footer/logo.png'

import Link1 from '../../assets/footer/Link-1.svg'
import Link2 from '../../assets/footer/Link-2.svg'
import Link3 from '../../assets/footer/Link-3.svg'
import Link4 from '../../assets/footer/Link-4.svg'
import Twitter from '../../assets/footer/twitter.svg'
import { Link, useNavigate } from "react-router-dom"
import Button from "../button"

const Footer: FC = () => {
  const navigate = useNavigate()
  const medias = [
    {
      icon: Twitter,
      url: ''
    },
    {
      icon: Link1,
      url: ''
    },
    {
      icon: Link2,
      url: ''
    },
    {
      icon: Link3,
      url: ''
    },
    {
      icon: Link4,
      url: ''
    }
  ]

  const goTo = (page: string) => {
    navigate(page)
  }
  return (
    <div className={styles.footer}>

      <div className={styles.mediasContainer}>
        <img src={Logo} alt="" className={styles.logo} />
        <div className={styles.medias}>
          {
            medias.map((media, index: number) => {
              return (
                <Link to={media.url} className={styles.media} key={index} >
                  <img src={media.icon} alt="" />
                </Link>
              )
            })
          }
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div>
          <h3>Contact Us</h3>
          <span>Info@7vfi.ai</span>
        </div>

        <div>
          <h3>Community</h3>
          <span>Discord</span>
          <span>Twitter</span>
          <span>Telegram</span>
        </div>

        <div>
          <h3>Protocol</h3>
          <span>Docs</span>
          <span>Medium</span>
          <span>Github</span>
        </div>
      </div>

      <Button text="Launch App" type="secundary" onClick={() => goTo('app')} />
    </div>
  )
}

export default Footer