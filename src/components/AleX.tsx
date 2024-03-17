'use client'
import { css } from '@kuma-ui/core'
import { FadeInMotion } from './motion/FadeInMotion'

export const AleX = () => {
  return (
    <section className={Diaglonal}>
      <FadeInMotion className={alexContainer}>
        <p className={title}>Who is AleX?</p>
        <div className={ServiceInner}>
          <p className={text}>
            私たちが目指す最終的なサービスがAleXです挑戦したい人が行動したいと思った瞬間に行動するための全て（資金、人脈、知識など）を兼ね備えた総合プラットフォーム
            <br></br>
            誰でも無料で使えるオープンソース型のプラットフォーム<br></br>
            Web3、ブロックチェーンを駆使した自立分散型のプラットフォーム<br></br>
          </p>
        </div>
      </FadeInMotion>
    </section>
  )
}

const Diaglonal = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150vh;
  transform: skewY(2deg);
  background-image: url('/bg-service-sub.png');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -19;
  @media (max-width: xl) {
    height: 80vh;
  }
  @media (max-width: md) {
    height: auto;
  }
`

const alexContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 50px;
  @media (max-width: xl) {
    height: auto;
    width: 90%;
    padding: 10vh 0;
  }
  & > * {
    transform: skewY(-2deg);
  }
`

const ServiceInner = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  color: #fff;
  text-align: left;
  margin-left: 50px;
  @media (max-width: lg) {
    margin-left: 0;
    width: 100%;
  }
`


const title = css`
  font-size: 4rem;
  font-weight: bold;
  text-decoration: none;
  text-align: left;
  color: white;
  @media (max-width: xl) {
    font-size: 7vw;
  }
`

const text = css`
  font-size: 1.5rem;
  margin-top: 30px;
  font-weight: normal;
  text-decoration: none;
  color: white;
  @media (max-width: xl) {
    font-size: 2vw;
  }
  @media (max-width: md) {
    font-size: 1rem;
  }
`
