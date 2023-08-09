import { FC } from "react"
import styles from './styles.module.scss'
import Header from "../../components/header"
import Footer from "../../components/footer"
import Button from "../../components/button"
import Content from "../../components/content"

import Neural from '../../assets/home/neural.svg'
import Mind from '../../assets/home/mind.svg'
import Group from '../../assets/home/group.svg'

import Partner1 from '../../assets/home/partner1.svg'
import Partner2 from '../../assets/home/partner2.svg'
import Partner3 from '../../assets/home/partner3.svg'
import Partner4 from '../../assets/home/partner4.svg'
import Partner5 from '../../assets/home/partner5.svg'
import Partner6 from '../../assets/home/partner6.svg'
import { useNavigate } from "react-router-dom"

type ContentType = {
  main?: boolean;
  title: string;
  alignment: 'start' | 'center' | 'end';
  contents: any;
  fullSize?: boolean;
  small?: boolean;
}

const Home: FC = () => {
  const navigate = useNavigate()
  const contents: ContentType[] = [
    {
      main: true,
      title: "Experience DeFi Like Never Before",
      alignment: "center",
      contents: (
        <>
          <span>
            Discover our all-in-one platform that brings simplicity and sophistication to the world of Decentralized Finance. With cutting-edge AI tools, alpha-seeking strategies, and a focus on innovation, we are driving the evolution of DeFi and empowering users to thrive in this new era.
          </span>
          <Button text="Enter App" type="primary" onClick={() => goTo('app')} />
        </>
      ),
      fullSize: true
    },
    {
      title: "Our Vision",
      alignment: "start",
      contents: (
        <span>
          We are dedicated to uncovering inefficiencies and disparities in the decentralized finance (DeFi) landscape. Through the application of specialized AI and machine learning algorithms and non-directional strategies, we seek to explore new opportunities and drive optimal results. Our approach is supported by a proprietary crypto management monitoring software tool and a robust risk and volatility mitigation strategy, all powered by the unparalleled capabilities of advanced artificial intelligence and machine learning.
        </span>
      ),
      fullSize: false,
      small: true
    },
    {
      title: "Customize Your Defi Journey",
      alignment: "start",
      contents: (
        <>
          <span>
            Users will have the flexibility to individually participate in our three main modules:
          </span>
          <ul>
            <li>Our automated concentrated liquidity provision system.</li>
            <li>Our proprietary real yield protocol scorecard analyzer.</li>
            <li>Our liquid staking integration module.</li>
          </ul>
          <span>
            As the crown jewel of our platform, our money-legos strategy will take investor funds and strategically allocate to top liquidity pools, ensuring a blend of security and high returns. The fees generated from these pools are intelligently reinvested into other secondary strategies boosting yields and enabling aggressive returns through a continuous yield generation process.
          </span>
        </>
      ),
      fullSize: false
    },
    {
      title: "Our edge",
      fullSize: true,
      alignment: 'center',
      contents: (
        <div className={styles.flex}>
          <div>
            <h6>AI-POWERED TOOLS</h6>
            <span>
              Cutting-edge deep learning models that harness the power of data-driven neural networks and layers focused on predictive analysis.
            </span>
            <img src={Neural} alt="" />
          </div>
          <div>
            <h6>MACHINE LEARNING ALGORITHMS</h6>
            <span>
              Machine learning models that leverage data-driven empirical probabilities and statistical models to make accurate predictions.
            </span>
            <img src={Mind} alt="" />
          </div>
          <div>
            <h6>A ONE-STOP-SHOP FOR DEFI INVESTING</h6>
            <span>
            Tapping into the potential of the major DeFi protocols across various networks.
            </span>
            <img src={Group} alt="" />
          </div>
        </div>
      )
    },
    {
      title: "Partners",
      fullSize: true,
      alignment: 'center',
      contents: (
        <div className={styles.grid}>
          <div className={styles.partner}>
            <img src={Partner1} alt="" />
          </div>
          <div className={styles.partner}>
            <img src={Partner3} alt="" />
          </div>
          <div className={styles.partner}>
            <img src={Partner4} alt="" />
          </div>
          <div className={styles.partner}>
            <img src={Partner5} alt="" />
          </div>
          <div className={styles.partner}>
            <img src={Partner6} alt="" />
          </div>
        </div>
      )
    }
  ]

  const goTo = (page: string) => {
    navigate(page)
  }

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.container}>
        {
          contents.map((item: ContentType, index: number) => {
            return (
              <Content content={item} key={index} />
            )
          })
        }
      </div>
      <Footer />

    </div>
  )
}

export default Home